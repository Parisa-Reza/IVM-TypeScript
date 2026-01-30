import { useInstanceMutation } from "@/api/hooks"
import { InstanceForm } from "./_components"

export const InstancePage= ()=>{
    const instanceMutaion = useInstanceMutation();
return(

    <div className="p-30">
        <InstanceForm onSubmit={(data)=>instanceMutaion.mutate(data)}/>
    </div>
)
}