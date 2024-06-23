"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import CommonForm from "../common-form";
import { 
    candidateOnboardFormControls, 
    haclkathonOnboardFormControls, 
    initialCandidateFormData, 
    initialHackathonFormData, 
    initialOthersFormData, 
    initialRecruiterFormData, 
    othersOnboardFormControls, 
    recruiterOnboardFormControls
 } from "@/utils";

 
function OnBoard() {


    const [currentTab, setCurrentTab] = useState("candidate");

    const [candidateFormData, setCandidateFormData] = useState(initialCandidateFormData);

    const [recruiterFormData, setRecruiterFormData] = useState(initialRecruiterFormData);

    const [hackathonFormData, sethackathonFormData] = useState(initialHackathonFormData);

    const [othersFormData, setOthersFormData] = useState(initialOthersFormData);

    function handleTabChange(value) {
        setCurrentTab(value);
    }

	return (
		<div className="bg-white">
			<Tabs value={currentTab} onValueChange={handleTabChange}>
				<div className="w-full">
					<div className="flex items-baseline justify-between border-b pb-6 pt-24">
						<h1 className="text-4xl font-bold tracking-tight text-gray-900">
							Welcome to onboarding
						</h1>

						<TabsList>
							<TabsTrigger value="candidate">Candidate</TabsTrigger>
							<TabsTrigger value="recruiter">recruiter</TabsTrigger>
							<TabsTrigger value="hackathon">Hackathon</TabsTrigger>
							<TabsTrigger value="others">Others</TabsTrigger>
						</TabsList>
					</div>
				</div>

                <TabsContent value="candidate">
                    <CommonForm
                        formControls={candidateOnboardFormControls}
                        buttonText={'Onboard as candidate'}
                        formData={candidateFormData}
                        setFormData={setCandidateFormData}
                        />
                </TabsContent>
                <TabsContent value="recruiter">
                    <CommonForm
                        formControls={recruiterOnboardFormControls}
                        buttonText={'Onboard as recruiter'}
                        formData={recruiterFormData}
                        setFormData={setRecruiterFormData}
                        />
                    </TabsContent>
                    <TabsContent value="hackathon">
                        <CommonForm
                            formControls={haclkathonOnboardFormControls}
                            buttonText={'Onboard as hackathon'}
                            formData={hackathonFormData}
                            setFormData={sethackathonFormData}
                            />
                    </TabsContent>

                    <TabsContent value="others">
                        <CommonForm
                            formControls={othersOnboardFormControls}
                            buttonText={'Onboard as others'}
                            formData={othersFormData}
                            setFormData={setOthersFormData}
                        
                        />

                    </TabsContent>
			</Tabs>
		</div>
	);
}

export default OnBoard;
