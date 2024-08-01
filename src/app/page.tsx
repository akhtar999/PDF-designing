"use client";
import { useRef, useEffect } from "react";
import { useReactToPrint } from "react-to-print";
import photo from "../../public/dummy.jpg";
import Image from "next/image";

export default function App() {
  const componentRef = useRef<HTMLDivElement>(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  useEffect(() => {
    const handleKeyDown = (event: any) => {
      if (event.ctrlKey && event.key === "p") {
        event.preventDefault();
        handlePrint();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handlePrint]);

  return (
    <div>
      <button
        className="hidden border px-5 py-2 bg-blue-500 text-white rounded-lg ml-10 no-print"
        onClick={handlePrint}
      >
        Print
      </button>

      <div
        className="bg-white p-6 mt-7 pt-0 mx-auto max-w-4xl "
        ref={componentRef}
        style={{
          backgroundImage: "url('/logo-opacity.png')",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex items-center">
          <div className="">
            <Image src="/logo.png" width={120} height={120} alt="logo" />
          </div>
          <div className="flex items-center flex-col">
            <p className="text-sm">
              An{" "}
              <span className="font-[500]">
                ISO 9001:2008 certified Organization
              </span>
            </p>
            <h2 className="text-red-700 font-bold text-xl">
              असमटेक कंप्यूटर एजुकेशन रिसर्च एंड ट्रेनिंग{" "}
            </h2>
            <h1 className="font-bold font-merriweather text-blue-700 text-3xl">
              AXOMTECH COMPUTER EDUCATION
            </h1>
            <p className="text-3xl font-merriweather font-bold text-blue-700">
              RESEARCH & TRAINING
            </p>
            <p className="text-sm mb-3">
              <span className="font-[500]">Govt Registered</span> under the
              Companies Act, 2013 (18 of 2013)
            </p>
          </div>
        </div>
        <div className="border-t-4 border-dotted border-blue-700 mt-1 w-full"></div>
        <form className="py-4 px-6 font-opensans font-[500] text-[14px]">
          <div className="flex justify-between">
            <div>
              <p className="italic mt-1 mb-2">
                Please fill this registration form in{" "}
                <span className="font-[700]">CAPITAL LETTERS.</span>
              </p>
              <div className="mb-2">
                {/* <label className="block"> */}
                <p>
                  Admission For: (Month){" "}
                  <span className="font-semibold">July</span>{" "}
                  <span className="ml-14">(Year)</span>{" "}
                  <span className="font-semibold">2024</span>
                </p>
                {/* </label> */}
              </div>
              <div className="mb-2">
                <label className="block">
                  Course Interested:{" "}
                  <span className="font-semibold">XXXXX</span>
                </label>
              </div>
              <div className="mb-2">
                <label className="block">
                  1. Candidate Name:{" "}
                  <span className="font-semibold">JOHN DOE</span>
                </label>
              </div>
              <div className="mb-2">
                <label className="block">
                  2. Father’s Name:{" "}
                  <span className="font-semibold">MICHELL DOE</span>
                </label>
              </div>
              <div className="mb-2">
                <label className="block">
                  3. Mother’s Name:{" "}
                  <span className="font-semibold">JEMINA DOE</span>
                </label>
              </div>
            </div>
            <div className="border text-center border-black w-36 h-40 mt-2 relative">
              <Image
                src={photo}
                alt="photo"
                layout="fill"
                objectFit="cover"
                className="absolute inset-0"
              />
              {/* <div className="absolute inset-0 flex items-center justify-center">
                <span>PHOTO</span>
              </div> */}
            </div>
          </div>

          <label className="block">2. Full Address:</label>
          <div className="flex gap-20 mb-2">
            <div>
              <p className="ml-8">
                Vill: <span className="font-semibold">HIRAPARA</span>
              </p>
              <p className="ml-8">
                City: <span className="font-semibold">GUWAHATI</span>
              </p>
              <p className="ml-8">
                {" "}
                State: <span className="font-semibold">ASSAM</span>
              </p>
              <p className="ml-8">
                Nationality: <span className="font-semibold">INDIAN</span>
              </p>
            </div>
            <div>
              <p className="ml-8">
                PO: <span className="font-semibold">DHULA</span>
              </p>
              <p className="ml-8">
                Dist: <span className="font-semibold">DHULA</span>
              </p>
              <p className="ml-8">
                {" "}
                Pin Code: <span className="font-semibold">784146</span>
              </p>
            </div>
          </div>
          <div className="flex gap-40 mb-2">
            <p>
              5. a. Contact No <span className="italic">(Self)</span>:{" "}
              <span className="font-semibold">9988776655</span>
            </p>

            <p>
              {" "}
              b. Contact No<span className="italic">(Home)</span>:{" "}
              <span className="font-semibold">9988776655</span>
            </p>
          </div>
          <div className="mb-2">
            6. Email ID <span className="italic">(If any)</span>:
            <span className="font-semibold"> johndoe@gmail.com</span>
          </div>
          <div className="flex justify-between mb-2">
            <p>
              {" "}
              7. Date of Birth:{" "}
              <span className="font-semibold">01/01/2000</span>
            </p>

            <p>
              {" "}
              8. Gender: <span className="font-semibold">Male</span>
            </p>
            <p>
              9. Caste: <span className="font-semibold">General</span>
            </p>
          </div>
          <div className="flex gap-20 mb-2">
            <p>
              10. Marital Status:{" "}
              <span className="font-semibold">Married </span>
            </p>
            <p>
              11. Employment Status:{" "}
              <span className="font-semibold">Student</span>
            </p>
          </div>
          <div className="mb-2">
            <label className="block mb-2">12. Education Qualification:</label>
            <table className="min-w-full border border-black">
              <thead>
                <tr>
                  <th className="border border-black px-4 py-1">Exam Passed</th>
                  <th className="border border-black px-4 py-1">
                    Board/University
                  </th>
                  <th className="border border-black px-4 py-1">% of Marks</th>
                  <th className="border border-black px-4 py-1">
                    Year of Passing
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-black px-4 py-1">XXXXXX</td>
                  <td className="border border-black px-4 py-1">XXXXXX</td>
                  <td className="border border-black px-4 py-1">XXXXXX</td>
                  <td className="border border-black px-4 py-1">XXXXXX</td>
                </tr>
                <tr>
                  <td className="border border-black px-4 py-1">XXXXXX</td>
                  <td className="border border-black px-4 py-1">XXXXXX</td>
                  <td className="border border-black px-4 py-1">XXXXXX</td>
                  <td className="border border-black px-4 py-1">XXXXXX</td>
                </tr>
                <tr>
                  <td className="border border-black px-4 py-1">XXXXXX</td>
                  <td className="border border-black px-4 py-1">XXXXXX</td>
                  <td className="border border-black px-4 py-1">XXXXXX</td>
                  <td className="border border-black px-4 py-1">XXXXXX</td>
                </tr>
              </tbody>
            </table>
            <p className="italic">
              (Please attach photocopies of all the education certificates from
              metric onwards )
            </p>
          </div>
          <div className="mb-4 italic">
            <p>
              <span className="font-bold">DECLARATION BY STUDENT:</span>I,
              <span className="font-semibold"> JOHN DOE</span>, declare that the
              information provided in this registration form is accurate and
              complete to the best of my knowledge. I understand that any false
              or misleading information may lead to the rejection of my
              application or subsequent dismissal from the institute.
            </p>
          </div>
          <div className="mb-4 mt-5 flex justify-between">
            <div className="mt-8">
              <p className="font-bold">Signature of the Candidate</p>
              <p>Place: ...............................</p>
              <p>Date: ...............................</p>
            </div>
            <div className="border border-black w-80 h-24 rounded-lg p-2">
              <p className="italic opacity-[50%] text-xs">
                For ACERT Authorised Study Centre Use
              </p>
            </div>
          </div>
        </form>
        <div className="border-t-4 border-dotted border-black mt-1 w-full"></div>
        <p className="italic mt-3 opacity-[50%] text-sm">
          For <span className="font-bold">ACERT</span> Office Use Only
        </p>{" "}
      </div>
    </div>
  );
}
