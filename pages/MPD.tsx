import React from "react";

type MPDItem = {
  label: string;
  value?: string;
  file?: string;
  link?: string;
  sub?: { label: string; value: string }[];
};

const sections: { title: string; data: MPDItem[] }[] = [
  {
    title: "A. General Information",
    data: [
      { label: "Name of the School", value: "Gayatri English Medium School" },
      { label: "Address", value: "Moshi, Pimpri-Chinchwad, Pune" },
      { label: "Affiliation No.", value: "1130818" },
      { label: "School Code", value: "30740" },
      { label: "UDISE Code", value: "27252003138" },
      { label: "Email", value: "contact@gayatrischoolpune.com" },
      { label: "Phone Number", value: "+91 95277 64646" },
    ],
  },

  {
    title: "B. Documents & Information",
    data: [
      {
        label: "Affiliation Letter",
        file: "/CBSE-GRANT-LETTER.pdf",
      },
      {
        label: "NOC Certificate",
        file: "/NOC-For-Affiliation-CBSE-2026.pdf",
      },
      {
        label: "Trust/Society Certificate",
        file: "/Society-Trust-Registration-Certificate.pdf",
      },
      {
        label: "Recognition Certificate (RTE / Namuna-2)",
        file: "/GEMS-NAMUNA-2-2025-28.pdf",
      },
      {
        label: "Building Safety Certificate",
        file: "/Building-Safety-Certificate-2026.pdf",
      },
      {
        label: "Fire Safety Certificate",
        file: "/Fire-Safety-Certificate-2026.pdf",
      },
      {
        label: "Self Certification by School",
        file: "/07-Self-Certification.pdf",
      },
      {
        label: "Safe Drinking Water and Sanitary Condition Certificate",
        file: "/Safe-Drinking-Water-Certificate-2026.pdf",
      },
    ],
  },

  {
    title: "C. Result & Academics",
    data: [
      {
        label: "Academic Calendar",
        file: "/Calendar-2026-CBSE.pdf",
      },
      {
        label: "Fee Structure",
        file: "/assets/cbse/fee-structure.pdf",
      },
      {
        label: "Staff Details",
        file: "/assets/cbse/staff-details.pdf",
      },
    ],
  },

  {
  title: "D. Staff (Teaching)",
  data: [
    { label: "Principal", value: "Mrs. Archana Prasad Manglorhana" },
    { label: "Teachers Section Ratio", value: "40:1.5" },
    { label: "Details Of Special Educator", value: "Mr. Sujay Ghule" },
    { label: "Details Of Counsellor And Wellness Teacher", value: "Mr. Kailas Pawar" },
    {
      label: "Total No. Of Teachers",
      value: "30",
      sub: [
        { label: "PGT", value: "0" },
        { label: "TGT", value: "4" },
        { label: "PRT", value: "8" },
      ],
    },
  ],
},

{
  title: "E. School Infrastructure",
  data: [
    {
      label: "TOTAL CAMPUS AREA OF THE SCHOOL (IN SQUARE MTR)",
      value: "4000",
    },
    {
      label: "NO. AND SIZE OF THE CLASS ROOMS (IN SQ MTR)",
      value: "12 Classrooms (50 Sq.mtr)",
    },
    {
      label: "NO. AND SIZE OF LABORATORIES INCLUDING COMPUTER LABS (IN SQ MTR)",
      value: "1 Composite Science Lab (60 Sq.mtr)",
    },
    {
      label: "INTERNET FACILITY",
      value: "Yes (300 MBPS)",
    },
    {
      label: "NO. OF GIRLS TOILETS",
      value: "10",
    },
    {
      label: "NO. OF BOYS TOILETS",
      value: "10",
    },
    {
      label: "LINK OF YOUTUBE VIDEO OF THE INSPECTION OF SCHOOL COVERING THE INFRASTRUCTURE OF THE SCHOOL",
      value: "Visit Link",
      link: "https://www.youtube.com/watch?v=r9G0j_XPduQ", // 🔁 replace with actual video
    },
  ],
},
];

const MPD: React.FC = () => {
  return (
  <section className="bg-[#f8f9fb] py-16">
    <div className="max-w-6xl mx-auto px-6">

      {/* Header */}
      <div className="text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-black text-[#1e3a8a] mb-4">
          Mandatory Public Disclosure
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          As per CBSE guidelines, all mandatory information and documents are provided below for transparency and public access.
        </p>
      </div>

      {/* Sections */}
      {sections.map((section, i) => (
        <div key={i} className="mb-12">

          <h2 className="text-2xl font-bold text-[#1e3a8a] mb-4 border-l-4 border-orange-500 pl-3">
            {section.title}
          </h2>

          <div className="overflow-hidden rounded-xl shadow bg-white">
            <table className="w-full text-left border-collapse">
              <tbody>

                {section.data.map((item, index) => (
                  <tr key={index} className="border-b last:border-none hover:bg-gray-50 transition">

                    <td className="p-4 font-semibold text-gray-700 w-1/2">
                      {item.label}
                    </td>

                    <td className="p-4">
                      <div className="flex flex-wrap gap-2">

                       {'value' in item && item.value && !('link' in item) && (
  <span className="text-gray-700">{item.value}</span>
)}

                        {'file' in item && item.file && (
                          <a
                            href={item.file}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#1e3a8a] text-white px-4 py-2 rounded-md text-sm font-bold"
                          >
                            View Document
                          </a>
                        )}

                        {'link' in item && item.link && (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-bold"
                          >
                            Visit Link
                          </a>
                        )}

                      </div>
                    </td>

                  </tr>
                ))}

              </tbody>
            </table>
          </div>

        </div>
      ))}

    </div>
  </section>
);
  
        ;
      
    };
export default MPD;