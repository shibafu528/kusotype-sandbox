/// <reference types="react"/>

type WrapperProps<P> = {
    className?: string
    component: React.ComponentType<P>
} & P

declare const Wrapper: <P>(props: React.PropsWithChildren<WrapperProps<P>>) => React.ReactElement;

export default Wrapper;