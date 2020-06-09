import React from 'react';
import ReactDOM from 'react-dom';
import Kyomu, {Hyde} from 'kuso/src/kuso/Kyomu';
import Ireko from 'kuso/src/kuso/Ireko';
import Wrapper from 'kuso/src/kuso/Wrapper';

const App: React.FC = () => (
    <>
        <Kyomu mu={`${Hyde}`}/>
        <Ireko className={'unko'}>
            <Ireko.InnerItem name={'ようかん'}/>
        </Ireko>
        <Wrapper className={'kasu'} component={Kyomu} mu={'a'}/>
    </>
)

ReactDOM.render(<App/>, document.getElementById("app"));