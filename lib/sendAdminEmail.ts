import { Resend } from "resend";
import type { AthleteSubmission } from "./db";

function requireEnv(name: string): string {
  const val = process.env[name];
  if (!val) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return val;
}

function field(label: string, value: string | null | undefined): string {
  return `${label}: ${value || "(not provided)"}`;
}

export async function sendAdminEmail(
  submission: AthleteSubmission
): Promise<{ success: boolean; error?: string }> {
  // Validate all required env vars upfront — fail loudly with exact names
  const missing: string[] = [];
  if (!process.env.RESEND_API_KEY) missing.push("RESEND_API_KEY");
  if (!process.env.RECRUITOS_ADMIN_EMAIL) missing.push("RECRUITOS_ADMIN_EMAIL");
  if (!process.env.RECRUITOS_FROM_EMAIL) missing.push("RECRUITOS_FROM_EMAIL");
  if (!process.env.NEXT_PUBLIC_APP_URL) missing.push("NEXT_PUBLIC_APP_URL");

  if (missing.length > 0) {
    const msg = `Missing environment variables: ${missing.join(", ")}`;
    console.error(`[RecruitOS] EMAIL CONFIG ERROR — ${msg}`);
    return { success: false, error: msg };
  }

  const adminEmail = process.env.RECRUITOS_ADMIN_EMAIL!;
  const fromEmail = process.env.RECRUITOS_FROM_EMAIL!;
  const appUrl = process.env.NEXT_PUBLIC_APP_URL!;
  const adminLink = `${appUrl}/admin/athletes/${submission.id}`;

  const subject = `NEW RecruitOS Athlete Submission - ${submission.first_name ?? ""} ${submission.last_name ?? ""}`.trim();

  const body = `
NEW RECRUITOS ATHLETE SUBMISSION
=================================
Submitted: ${submission.created_at}
Athlete ID: ${submission.id}
Admin Link: ${adminLink}

─── ATHLETE INFO ────────────────
${field("First Name", submission.first_name)}
${field("Last Name", submission.last_name)}
${field("Athlete Email", submission.athlete_email)}
${field("Athlete Phone", submission.athlete_phone)}

─── PARENT / GUARDIAN INFO ──────
${field("Parent Name", submission.parent_name)}
${field("Parent Email", submission.parent_email)}
${field("Parent Phone", submission.parent_phone)}

─── ACADEMIC INFO ───────────────
${field("High School", submission.high_school)}
${field("City", submission.city)}
${field("State", submission.state)}
${field("Graduation Year", submission.grad_year)}
${field("GPA", submission.gpa)}
${field("ACT/SAT Score", submission.test_score)}
${field("Intended Major", submission.intended_major)}

─── SPORT / FOOTBALL INFO ───────
${field("Sport", submission.sport)}
${field("Position", submission.position)}
${field("Height", submission.height)}
${field("Weight", submission.weight)}

─── FILM & SOCIAL ───────────────
${field("Hudl / Film Link", submission.film_link)}
${field("Twitter / X Link", submission.twitter)}

─── STATS & AWARDS ──────────────
${field("Stats", submission.stats)}
${field("Awards", submission.awards)}

─── RECRUITING GOALS ────────────
${field("Preferred College Level", submission.college_level)}
${field("Preferred Location", submission.preferred_location)}
${field("Recruiting Goals", submission.recruiting_goals)}
${field("Notes", submission.notes)}

─── RAW JSON ────────────────────
${submission.raw_json}
`.trim();

  console.log(`[RecruitOS] Sending admin email to ${adminEmail} for submission ${submission.id}...`);

  try {
    const resend = new Resend(process.env.RESEND_API_KEY!);
    const result = await resend.emails.send({
      from: fromEmail,
      to: adminEmail,
      subject,
      text: body,
    });

    if (result.error) {
      const msg = `Resend API error: ${result.error.message ?? JSON.stringify(result.error)}`;
      console.error(`[RecruitOS] Admin email FAILED for ${submission.id} — ${msg}`);
      return { success: false, error: msg };
    }

    console.log(`[RecruitOS] Admin email SENT successfully for ${submission.id} (Resend ID: ${result.data?.id})`);
    return { success: true };
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error(`[RecruitOS] Admin email FAILED for ${submission.id} — ${msg}`);
    return { success: false, error: msg };
  }
}
