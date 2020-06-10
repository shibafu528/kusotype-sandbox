type GenericProps<T> = {
    className?: string
    tag: T
}

declare const Generic: <T extends React.ElementType<P>, P = any>
    (props: React.ComponentPropsWithRef<T> & GenericProps<T>) => React.ReactElement

export default Generic;