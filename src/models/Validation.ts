import z from "zod";

export const validation = z.object({
  email: z.string().email("איימיל לא תקין"),
  password: z
    .string()
    .min(5, "הסיסמא צריכה להכיל לפחות 8 תווים ")
    .max(16, "הסיסמא צריכה להכיל עד 16 תווים"),
});

export type Schema = z.infer<typeof validation>;
