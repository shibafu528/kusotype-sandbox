/// <reference types="react"/>

// propsを上書き合成
type OverrideProps<T extends React.ElementType, OverrideProps> = 
    Omit<React.ComponentPropsWithRef<T>, keyof OverrideProps> & OverrideProps;

// `tag` propsで受けたタグ名orコンポーネントを生成して使いたい
type PolymorphicPropsBase<T extends React.ElementType | null | undefined> = {
    tag: T
}

// 多態コンポーネントの持つpropsを優先しつつ、
// `tag` propsの指すコンポーネントのpropsも渡せるようにしたい
type PolymorphicProps<P, T extends React.ElementType<TProps>, TProps = any> = 
    React.PropsWithChildren<OverrideProps<T, P>> & PolymorphicPropsBase<T>;

// 省略可能なデフォルト型を持ったバージョン
type OptionalPolymorphicProps<P, T extends React.ElementType<TProps> | null | undefined, TDefault extends React.ElementType<TDefaultProps>, TProps = any, TDefaultProps = any> =
    React.PropsWithChildren<OverrideProps<T extends null | undefined ? TDefault : T, P>> & Partial<PolymorphicPropsBase<T>>;

// これは多態コンポーネントのprops例
type PolymorphicImplProps = {
    className?: string
    emotion?: string
}

// propsでコンポーネントの指定を受けて、中で作ったりするやつ
export const Polymorphic: <T extends React.ElementType<P>, P = any>
    (props: PolymorphicProps<PolymorphicImplProps, T>) => React.ReactElement

// `tag` props を省略した場合にはdivになるバージョン
export const DefaultPoly: <T extends React.ElementType | React.ElementType<P> | null | undefined = 'div', P = any>
    (props: OptionalPolymorphicProps<PolymorphicImplProps, T, 'div'>) => React.ReactElement
