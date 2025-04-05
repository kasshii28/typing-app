import { z } from "zod";

/**
 * ユーザー登録フォームのバリデーションスキーマ
 *
 * @description ユーザー登録時に必要な情報を検証するためのZodスキーマ
 * @property {string} name - ユーザー名（1文字以上必要）
 * @property {string} email - 有効なメールアドレス
 * @property {string} password - パスワード（8文字以上必要）
 * @property {string} confirmPassword - 確認用パスワード（passwordと一致する必要がある）
 */
export const signUpScheme = z
	.object({
		name: z.string().min(1, { message: "Name is required" }),
		email: z.string().email({ message: "Invalid email address" }),
		password: z
			.string()
			.min(8, { message: "Password must be at least 8 characters long" }),
		confirmPassword: z
			.string()
			.min(8, { message: "Password must be at least 8 characters long" }),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Passwords do not match",
		path: ["confirmPassword"], // エラーを表示するフィールドを指定
	});
