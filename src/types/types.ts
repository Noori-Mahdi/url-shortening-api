export interface MainNavPropsType {
    listPage:string[]
}

export interface ButtonPropsType {
    title:string,
    customClass: string | null,
    color: 'btn-primary' | 'btn-selected' | 'btn-transparent';
}

export interface InputPropsType {
    btnTitle: string,
    placeholder?: string,
}

interface Position{
    justify:'justify-center'|'justify-end'|'justify-start' | 'justify-around' |'justify-between',
    align:'items-center'|'items-end'|'items-start'
}

export interface BordPropsType{
    children: React.ReactNode, 
    bgColorClass?: string,
    bgImg?: string,
    borderRadiuosClass?: 'border-radius-normal',
    positionChild?:Position,
    flex:boolean,
}

interface Link{
   selected:boolean,
   shortLink:string,
   normalLink:string, 
}

export interface ListPropsType{
    links:Link[]
}

export interface CardPropsType{
    imgCard: string, 
    titleCard: string, 
    infoCard: string,
    index: number,
    
}

export interface VerticalListPropsType{
    title: string,
    listItems: string[],
}