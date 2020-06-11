import React from 'react';
import ReactDOM from 'react-dom';
import Kyomu, {Hyde} from 'kusotype/src/kusotype/Kyomu';
import Ireko from 'kusotype/src/kusotype/Ireko';
import Wrapper from 'kusotype/src/kusotype/Wrapper';
import {Polymorphic, DefaultPoly} from 'kusotype/src/kusotype/Polymorphic';

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
