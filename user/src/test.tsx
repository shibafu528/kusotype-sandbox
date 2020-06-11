import React from 'react';
import ReactDOM from 'react-dom';
import Kyomu, {Hyde} from 'kuso/src/kuso/Kyomu';
import Ireko from 'kuso/src/kuso/Ireko';
import Wrapper from 'kuso/src/kuso/Wrapper';
import {Polymorphic, DefaultPoly} from 'kuso/src/kuso/Polymorphic';

const App: React.FC = () => (
    <>
        <Kyomu mu={`${Hyde}`}/>
        <Ireko className={'unko'}>
            <Ireko.InnerItem name={'ようかん'}/>
        </Ireko>
        <Wrapper className={'kasu'} component={Kyomu} mu={'a'}/>
        <Polymorphic className={'hoge'} tag={'div'} onClick={() => {}} style={{position: 'fixed'}}/>
        <Polymorphic className={'hoge'} tag={Kyomu} mu={'kyomu〜〜'}/>
        <DefaultPoly onClick={() => {}} style={{position: 'fixed'}}/>
        <DefaultPoly tag={'div'}  onClick={() => {}} style={{position: 'fixed'}}/>
        <DefaultPoly tag={undefined}  onClick={() => {}} style={{position: 'fixed'}}/>
        <DefaultPoly tag={null}  onClick={() => {}} style={{position: 'fixed'}}/>
        <DefaultPoly tag={Kyomu} mu={'kyomu〜〜'}/>
    </>
)

ReactDOM.render(<App/>, document.getElementById("app"));
