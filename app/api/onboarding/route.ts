import { NextRequest, NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { insertSubmission } from "@/lib/db";
import { sendAdminEmail } from "@/lib/sendAdminEmail";

export async function POST(req: NextRequest) {
  console.log("[RecruitOS] Questionnaire received");

  let body: Record<string, string>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const id = randomUUID();
  const created_at = new Date().toISOString();

  const submission = {
    id,
    created_at,
    first_name: body.firstName ?? null,
    last_name: body.lastName ?? null,
    athlete_email: body.email ?? null,
    athlete_phone: body.phone ?? null,
    parent_name: body.parentName ?? null,
    parent_email: body.parentEmail ?? null,
    parent_phone: body.parentPhone ?? null,
    high_school: body.highSchool ?? null,
    city: body.city ?? null,
    state: body.state ?? null,
    grad_year: body.gradYear ?? null,
    gpa: body.gpa ?? null,
    test_score: body.testScore ?? null,
    intended_major: body.major ?? null,
    sport: body.sport ?? "Football",
    position: body.position ?? null,
    height: body.height ?? null,
    weight: body.weight ?? null,
    film_link: body.filmLink ?? null,
    twitter: body.twitter ?? null,
    stats: body.stats ?? null,
    awards: body.awards ?? null,
    college_level: body.level ?? null,
    preferred_location: body.location ?? null,
    recruiting_goals: body.recruitingGoals ?? null,
    notes: body.notes ?? null,
    raw_json: JSON.stringify({ ...body, id, created_at }),
  };

  // 1. Save to database first — never lose the submission
  try {
    insertSubmission(submission);
    console.log(`[RecruitOS] Athlete saved to database — ID: ${id}`);
  } catch (dbErr: unknown) {
    const msg = dbErr instanceof Error ? dbErr.message : String(dbErr);
    console.error(`[RecruitOS] Database save FAILED — ${msg}`);
    return NextResponse.json(
      { error: "Failed to save submission", details: msg },
      { status: 500 }
    );
  }

  // 2. Send admin email (non-blocking — submission is already saved)
  console.log(`[RecruitOS] Sending admin email...`);
  const emailResult = await sendAdminEmail(submission);

  return NextResponse.json({
    success: true,
    id,
    emailSent: emailResult.success,
    emailError: emailResult.error ?? null,
  });
}
