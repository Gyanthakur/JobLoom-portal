import { fetchProfileAction } from "@/actions";
import OnBoard from "@/components/on-board";
import { currentUser } from "@clerk/nextjs/server";
// import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
 


async function OnBoardPage() {
  

    // get the auth user from cleark

    const user = await currentUser();

    // fetch the profile info -> either user is candidate or recruiter
    const profileInfo = await fetchProfileAction(user?.id)


    if(profileInfo?._id){
      if(profileInfo?.role === 'recruiter' && !profileInfo.isPremiumUser) 
        redirect('/membership')
      else redirect('/');
    }
    else return <OnBoard />;
    
}
export default OnBoardPage;