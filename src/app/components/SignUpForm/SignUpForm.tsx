import { InputForm } from "@/app/components/InputForm/InputForm";
import { signUpScheme } from "@/app/schemes/signUp";
import type { SignUpFormSchemeType } from "@/app/types/components/Forms/form";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export const SignUpForm = () => {
	const form = useForm<SignUpFormSchemeType>({
		defaultValues: {
			email: "",
			password: "",
			confirmPassword: "",
		},
		resolver: zodResolver(signUpScheme),
	});

	return (
		<div>
			<Form {...form}>
				<form className="flex flex-col gap-4">
					<InputForm
						name="name"
						label="ユーザー名"
						type="text"
						placeholder="ユーザー名を入力してください"
						control={form.control}
					/>
					<InputForm
						name="email"
						label="メールアドレス"
						type="email"
						placeholder="メールアドレスを入力してください"
						control={form.control}
					/>
					<InputForm
						name="password"
						label="パスワード"
						type="password"
						placeholder="パスワードを入力してください"
						control={form.control}
					/>
					<InputForm
						name="confirmPassword"
						label="確認用パスワード"
						type="password"
						placeholder="確認用パスワードを入力してください"
						control={form.control}
					/>
				</form>
			</Form>
		</div>
	);
};
