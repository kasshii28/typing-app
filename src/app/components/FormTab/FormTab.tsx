import { SignInForm } from "@/app/components/SignInForm/SignInForm";
import { SignUpForm } from "@/app/components/SignUpForm/SignUpForm";
import { TabItem } from "@/app/components/TabItem/TabItem";
import { TabMenu } from "@/app/components/TabMenu/TabMenu";

export const FormTab = () => {
	return (
		<>
			<TabMenu defaultTab="signIn" className="grid-cols-2">
				<TabItem value="signIn" label="サインイン">
					<SignInForm />
				</TabItem>
				<TabItem value="signUp" label="サインアップ">
					<SignUpForm />
				</TabItem>
			</TabMenu>
		</>
	);
};
