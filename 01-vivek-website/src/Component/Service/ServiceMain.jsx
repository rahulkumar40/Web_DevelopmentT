import React, { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import servicesD from "../../assets/serviceStore/services.js";
import comboService from "../../assets/serviceStore/serviceCo.js";

import IndividualCard from "./IndividualCard.jsx";
import { AppContext } from "../../Context/AppContext.jsx";
import ComboPackCard from "./ComboPackCard.jsx";

function ServiceMain() {
  const { tag } = useParams(); // Get category from URL
  const [selectedCategory, setSelectedCategory] = useState(tag || "all");
  const { color } = useContext(AppContext);

  // Update selectedCategory when URL changes
  useEffect(() => {
    setSelectedCategory(tag || "all");
  }, [tag]);

  // Merge individual and combo services
  const mergedServices = servicesD.map((service) => {
    const comboMatch = comboService.find((combo) => combo.tag === service.tag);
    return { 
      ...service, 
      comboService: comboMatch ? comboMatch.service : null 
    };
  });

  // Filter services based on selectedCategory
  const filteredServices = mergedServices.filter((service) =>
    selectedCategory === "all" || service.tag === selectedCategory
  );

  return (
    <div className={`w-full mx-auto rounded-md transition-all duration-300 ${
      !color ? "bg-black text-white" : "bg-white text-black"
    }`}>
      <div className="py-5">
        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 p-4 bg-gradient-to-r from-blue-700 to-purple-700 rounded-lg shadow-lg">
          {["all", "business", "political", "personal", "school-college"].map(
            (cat) => (
              <Link
                key={cat}
                to={`/service/${cat}`}
                className={`px-4 py-2 rounded-lg font-semibold shadow-md transition-transform transform hover:scale-105 ${
                  selectedCategory === cat ? "bg-amber-600" : "bg-amber-500"
                } text-white`}
              >
                {cat.replace("-", " ")}
              </Link>
            )
          )}
        </div>

        {/* Display Services (Filtered by Category) */}
        <div className="mt-5 grid">
          {filteredServices.map(({ tag, services, comboService }) => (
            <div key={tag} className="border rounded-lg shadow-md hover:shadow-lg transition-all">
              <h2 className="text-4xl text-center h-[5rem] bg-gradient-to-r from-blue-500 to-orange-500 font-bold text-black flex justify-center items-center">
                {tag.toUpperCase()}
              </h2>

              {/* Individual Services */}
              <IndividualCard datas={services} tag={tag} />

              {/* Combo Services  */}
              {comboService && <ComboPackCard datas={comboService} tag={tag} />}
            </div>
          ))}
        </div>
      </div>

        {/* Customization Section */}
        <div className={`m-4 p-4  `}>
          <h3 className="text-xl font-bold  ">
            Customization Available!
          </h3>
          <p className=" mt-2">
            Need a custom package? We can create a tailored solution based on
            your needs.{" "}
            <Link
              className="text-blue-700 font-semibold hover:underline"
              to="/contact"
            >
              Contact us
            </Link>{" "}
            today!
          </p>
        </div>
      </div>
  );
}

export default ServiceMain;
