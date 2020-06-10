// `tag` propsで受けたタグ名orコンポーネントを生成して使いたい
type GenericPropsBase<T extends React.ElementType> = {
    tag: T
}

// Wrapperコンポーネントのpropsを優先しつつ、
// `tag` propsの指すコンポーネントのpropsも渡せるようにしたい
type GenericProps<P, T extends React.ElementType<TP>, TP = any> = 
    Omit<React.ComponentPropsWithRef<T>, keyof P> & GenericPropsBase<T> & P;

// これはWrapperとなるコンポーネントのprops例
type GenericImplProps = {
    className?: string
    emotion?: string
}

// propsでコンポーネントの指定を受けて、中で作ったりするWrapperなやつ
declare const Generic: <T extends React.ElementType<P>, P = any>
    (props: GenericProps<GenericImplProps, T>) => React.ReactElement

export default Generic;

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