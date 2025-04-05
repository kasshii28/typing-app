import type { TabItemProps } from "@/app/types/components/Tabs/tabItem";
import type { TabMenuProps } from "@/app/types/components/Tabs/tabMenu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	Children,
	type FC,
	type PropsWithChildren,
	type ReactElement,
	isValidElement,
} from "react";
import { TabItem } from "@/app/components/TabItem/TabItem";

/**
 * タブを動的に表示するコンポーネント
 *
 * @component
 * @example
 * <TabMenu defaultTab="tab1" className="grid-cols-2">
 *   <TabItem value="tab1" label="タブ1">タブ1のコンテンツ</TabItem>
 *   <TabItem value="tab2" label="タブ2">タブ2のコンテンツ</TabItem>
 * </TabMenu>
 */
export const TabMenu: FC<PropsWithChildren<TabMenuProps>> = ({
	defaultTab,
	children,
	className,
}) => {
	// タブのアイテムをchildrenからReact要素を抽出し、明示的にキャスト
	const tabItems = Children.toArray(children).filter(
		(child): child is ReactElement<TabItemProps> =>
			isValidElement(child) && child.type === TabItem,
	);

	if (tabItems.length === 0) {
		return null;
	}

	// タブのdefaultValue
	const firstTabValue = tabItems[0]?.props.value;

	return (
		<Tabs defaultValue={defaultTab || firstTabValue}>
			{/* タブの表示部分 */}
			<TabsList className={`grid w-full ${className}`}>
				{tabItems.map((child) => (
					<TabsTrigger key={child.key} value={child.props.value}>
						{child.props.label}
					</TabsTrigger>
				))}
			</TabsList>

			{/* タブのコンテント表示部分 */}
			{tabItems.map((child) => (
				<TabsContent key={child.key} value={child.props.value}>
					{child}
				</TabsContent>
			))}
		</Tabs>
	);
};
