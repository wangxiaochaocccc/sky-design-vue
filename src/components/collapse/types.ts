import { Ref,InjectionKey } from 'vue'

export type nameTypes = string | number
export interface CollapseItemProps {
  name: nameTypes;
  title?: string;
  disabled?: boolean
}
export interface CollapseProps {
  modelValue: nameTypes[];
  accrroding?:boolean
}

export interface CollapseEmits {
  (e: 'update:modelValue', values: nameTypes[]): void;
  (e: 'change', values: nameTypes[]): void;
}
export interface CollapseContext {
  activeName: Ref<nameTypes[]>;
  handleClickTitle:(name:nameTypes)=>void
}

export const CollapseContextKey: InjectionKey<CollapseContext> = Symbol('collapseContext')