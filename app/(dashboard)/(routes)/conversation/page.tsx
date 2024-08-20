"use client"
import { Heading } from "@/components/Heading"
import { MessageSquare } from "lucide-react"
import { Loader } from "@/components/Loader"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import { any, z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "@/schema/constant"
import { useState } from "react"
import { useCompletion } from 'ai/react'
import axios,{AxiosError} from "axios"
import { Empty } from "@/components/Empty"
import { UserAvatar } from "@/components/UserAvatar"
import { BotAvatar } from "@/components/BotAvatar"

const Conversationpage = () => {

   
    const [isLoading,setIsLoading] = useState(false)
    const [messages,setMessages] = useState()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          prompt: ""
        }
    });
    
    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        setIsLoading(true)
        console.log("values",values)
        try {

          const response = await axios.post("/api/conversation",values)

          let mydata = response.data
          const cleanText = mydata.replace(/0:|[*\n"]/g, '');
          // console.log("response:",response)
          console.log("cleanText:",cleanText)
          setMessages(cleanText)
          setIsLoading(false)
        } catch (error:any) {
          setMessages(error)
        }
        
    }
   
  return (
   
    <div>
        <Heading title="Conversation"description="Start Your conversation with your personal assistent"icon={MessageSquare}iconColor="text-violet-500" bgColor="bg-violet-500/10" />   
        <div className="px-4 lg:px-8">
        <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="
                rounded-lg 
                border 
                w-full 
                p-4 
                px-3 
                md:px-6 
                focus-within:shadow-sm
                grid
                grid-cols-12
                gap-2
              "
            >
              <FormField
                name="prompt"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-10">
                    <FormControl className="m-0 p-0">
                      <Input
                        className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                        disabled={isLoading}
                        placeholder="How do I calculate the radius of a circle?"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button
                className="col-span-12 lg:col-span-2 w-full"
                type="submit"
                disabled={isLoading}
                size="icon"
              >
                Submit
              </Button>
            </form>
          </Form>
        </div> 
        <div className="space-y-4 mt-4">

             
          {isLoading ?(
            <div className="p-8 rounded-lg w-full flex items-center justify-center bg-muted">
              <Loader />
            </div>
          )
          :<div className="flex flex-col-reverse gap-y-4">
            
            <div className="p-8 w-full flex items-start gap-x-8 rounded-lg">
                <UserAvatar />
                <p className="text-sm">{messages}</p>
            </div>
          </div>}
         
         
        </div>
     </div>       
           
            
       
     
  )  
  
}

export default Conversationpage