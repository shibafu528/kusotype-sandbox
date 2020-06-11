// propsを上書き合成
type OverrideProps<T extends React.ElementType, OverrideProps> = 
    Omit<React.ComponentPropsWithRef<T>, keyof OverrideProps> & OverrideProps;

// `tag` propsで受けたタグ名orコンポーネントを生成して使いたい
type PolymorphicPropsBase<T extends React.ElementType | null | undefined> = {
    tag: T
}

// Wrapperコンポーネントのpropsを優先しつつ、
// `tag` propsの指すコンポーネントのpropsも渡せるようにしたい
type PolymorphicProps<P, T extends React.ElementType<TProps>, TProps = any> = 
    React.PropsWithChildren<OverrideProps<T, P>> & PolymorphicPropsBase<T>;

// これはWrapperとなるコンポーネントのprops例
type PolymorphicImplProps = {
    className?: string
    emotion?: string
}

// propsでコンポーネントの指定を受けて、中で作ったりするWrapperなやつ
export const Polymorphic: <T extends React.ElementType<P>, P = any>
    (props: PolymorphicProps<PolymorphicImplProps, T>) => React.ReactElement

// 省略可能なデフォルト型を持ったバージョン
type OptionalPolymorphicProps<P, T extends React.ElementType<TProps> | null | undefined, TDefault extends React.ElementType<TDefaultProps>, TProps = any, TDefaultProps = any> =
    React.PropsWithChildren<OverrideProps<T extends null | undefined ? TDefault : T, P>> & Partial<PolymorphicPropsBase<T>>;

// デフォルトではdivになるWrapper
export const DefaultPoly: <T extends React.ElementType | React.ElementType<P> | null | undefined = 'div', P = any>
    (props: OptionalPolymorphicProps<PolymorphicImplProps, T, 'div'>) => React.ReactElement

/*
  ex)

  import Generic from 'kuso/Generic';

  const Gomikasu: React.FC<{shout: string}> = ({shout}) => <div>{shout}</div>

  const App: React.FC = () => (
      <>
            <Generic tag={'input'} type={'text'}/>
            <Generic tag={Gomikasu} shout={'shine〜〜〜〜〜'}/>
      </>
  )
 */