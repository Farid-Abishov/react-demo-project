export default function({children,button,ButtonsContainer="menu"}){
// const ButtonsContainer=buttonsContainer;
return <>
 <ButtonsContainer>
    {button}
 </ButtonsContainer>
 {children}
</>
}