import { InputForm } from "@/app/components/InputForm/InputForm";
import { signInScheme } from "@/app/schemes/signIn";
import type { SignInFormSchemeType } from "@/app/types/components/Forms/form";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export const SignInForm = () => {
	const form = useForm<SignInFormSchemeType>({
		defaultValues: {
			email: "",
			password: "",
			confirmPassword: "",
		},
		resolver: zodResolver(signInScheme),
	});

	return (
		<div>
			<Form {...form}>
				<form className="flex flex-col gap-4">
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
				</form>
			</Form>
		</div>
	);
};
