import { useState,useEffect } from "react";
import uploadToIPFS from "/script/IPFS"

type formDT= {
      partyName:string;
      logo:File | null;
      candidate:string;
      leader:string;
      constituency:string;
  }

export default function CreateParty({contract,contractWS}) {
  const [formData, setFormData] = useState<formDT>({
    partyName: "",
    logo:null, 
    candidate: "",
    leader: "",
    constituency:"",
  });
  const [logoPreview,setPreview] = useState<string>("")
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setFormData((prev) => ({
        ...prev,
        logo:file,
      }));
    const reader = new FileReader();
    reader.onloadend = () => {
        setPreview(reader.result)
    };
    reader.readAsDataURL(file);
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
        const res =await uploadToIPFS(formData)
        console.log(res)
        const res_ = await contractWS.add(formData.partyName,res)   
    }catch(err){
        console.error(err)
    }
  };

     return (
    <div className="h-screen overflow-y-auto py- flex items-center justify-center
      bg-gradient-to-br from-indigo-50 via-white to-blue-100
      dark:from-[#0f172a] dark:via-[#111827] dark:to-[#1e293b] w-full md:p-20">

      <div className="w-full max-w-5xl bg-white dark:bg-[#1e293b]
        md:rounded-2xl md:shadow-2xl p-8 border
        border-indigo-100 dark:border-gray-700">

        <h1 className="text-3xl font-bold text-center mb-8
          bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent leading-normal">
          Political Party Registration
        </h1>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <InputField label="Party Name" name="partyName" value={formData.partyName} onChange={handleChange}/>
          <InputField label="Leader" name="leader" value={formData.leader} onChange={handleChange}/>
          <InputField label="Candidate" name="candidate" value={formData.candidate} onChange={handleChange}/>
          <InputField label="Constituency" name="constituency" value={formData.constituency} onChange={handleChange}/>

          {/* Logo Upload Full Width */}
          <div className="md:col-span-2">
            <label className="block mb-2 text-sm font-medium
              text-gray-700 dark:text-gray-300">
              Party Logo
            </label>

            <input
              type="file"
              accept="image/*"
              onChange={handleLogoUpload}
              className="w-full text-sm
                file:mr-4 file:py-2 file:px-4
                file:rounded-xl file:border-0
                file:bg-gradient-to-r file:from-cyan-500 file:to-blue-600 file:cursor-pointer file:hover:opacity-90 file:transition file:text-white
                "
            />

            {formData.logo && (
              <img
                src={logoPreview}
                alt="Preview"
                className="mt-4 h-24 rounded-xl border border-gray-300 dark:border-gray-600"
              />
            )}
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full py-3 rounded-xl
                bg-gradient-to-r from-cyan-500 to-blue-600 hover:opacity-90 transition                text-white font-semibold text-lg
                transition duration-300 shadow-lg">
              Submit Registration
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}


/* Reusable Input Component */
function InputField({ label, name, value, onChange }) {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium
        text-gray-700 dark:text-gray-300">
        {label}
      </label>

      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        required={true}
        className="w-full px-4 py-3 rounded-xl
          bg-gray-50 dark:bg-[#0f172a]
          border border-gray-300 dark:border-gray-600
          text-gray-800 dark:text-white
          focus:ring-2 focus:ring-indigo-500
          focus:outline-none transition duration-200"
      />
    </div>
  );
}

export {formDT} 
