import type { InputHTMLAttributes } from "react";
import type { FieldValues, UseControllerProps } from "react-hook-form";

/**
 * 入力フォームコンポーネントのプロパティ型定義
 *
 * @template T - フォームのフィールド値の型
 * @extends {Omit<InputHTMLAttributes<HTMLInputElement>, 'name'>} - name以外のHTMLInput属性
 * @extends {UseControllerProps<T>} - React Hook Formのコントローラープロパティ
 */
export interface InputFormProps<T extends FieldValues>
	extends Omit<InputHTMLAttributes<HTMLInputElement>, "name">,
		UseControllerProps<T> {
	/** 入力フィールドのラベル */
	label: string;
}
