import type { TabItemProps } from "@/app/types/components/Tabs/tabItem";
import type { PropsWithChildren } from "react";
import { memo } from "react";

/**
 * タブに表示するコンテンツを表現するコンポーネント
 * TabPanelsコンポーネント内で使用され、各タブに対応するコンテンツを定義します
 *
 * @component
 * @example
 * <TabItem label="タブ1">タブ1のコンテンツ</TabItem>
 *
 * @param {Object} props - コンポーネントのプロパティ
 * @param {React.ReactNode} props.children - タブパネルに表示する子要素
 * @param {string} props.label - タブの表示名（親コンポーネントで使用）
 * @param {string} [props.value] - タブの識別子（省略時はlabelが使用される）
 * @param {boolean} [props.disabled] - タブを無効化するかどうか
 *
 * @returns {React.ReactElement} 子要素をそのまま返します
 */
export const TabItem = memo<PropsWithChildren<TabItemProps>>(({ children }) => {
	return <>{children}</>;
});
