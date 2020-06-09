type IrekoProps = {
    className?: string
}

type IrekoInnerItemProps = {
    name: string
}

//declare const Ireko: React.FC<IrekoProps>;

interface Ireko extends React.FC<IrekoProps> {
    InnerItem: React.FC<IrekoInnerItemProps>;
}
declare const Ireko: Ireko;

export default Ireko;