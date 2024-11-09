import { TRoute, TUserPath } from "../types";


export const routeGenerator=(Items:TUserPath[])=>{
    const router=Items.reduce((acc:TRoute[],item)=>{
        if(item.path ){
            acc.push({
                path:item.path,
                element:item.element
            })
           console.log(acc);
           
        }
        if(item.children){
            item.children.forEach(child=>{
                acc.push({
                    path:child.path!,
                    element:child.element
                })
            })
        }
        return acc
    },[])
    return router
}