CREATE TABLE "employees" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"dni" text NOT NULL,
	"password_hash" text NOT NULL,
	"name" text NOT NULL,
	"role" text DEFAULT 'user' NOT NULL,
	"is_active" boolean DEFAULT true NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "employees_dni_unique" UNIQUE("dni")
);
--> statement-breakpoint
CREATE TABLE "job_documents" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"job_posting_id" uuid NOT NULL,
	"title" text NOT NULL,
	"document_url" text NOT NULL,
	"document_type" text NOT NULL,
	"uploaded_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "job_postings" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" text NOT NULL,
	"code" text NOT NULL,
	"regime" text NOT NULL,
	"vacancies" text NOT NULL,
	"description" text NOT NULL,
	"salary" text,
	"status" text DEFAULT 'DRAFT' NOT NULL,
	"publication_date" timestamp DEFAULT now() NOT NULL,
	"end_date" timestamp,
	"created_by" uuid NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "job_documents" ADD CONSTRAINT "job_documents_job_posting_id_job_postings_id_fk" FOREIGN KEY ("job_posting_id") REFERENCES "public"."job_postings"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "job_postings" ADD CONSTRAINT "job_postings_created_by_employees_id_fk" FOREIGN KEY ("created_by") REFERENCES "public"."employees"("id") ON DELETE no action ON UPDATE no action;