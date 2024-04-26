export default function({children,button,ButtonsContainer}){
// const ButtonsContainer=buttonsContainer;
return <>
 <ButtonsContainer>
    {button}
 </ButtonsContainer>
 {children}
</>
}