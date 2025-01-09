import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import Modal from "./Modal";
import ScrollButton from "./ScrollButton";



const Trending = ({ scrollY }) => {
  const [data, setData] = useState([]);
  const [selectedOption, setSelectedOption] = useState({ title: "Movies", value: "movie" });
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const options = [
    { title: "Movies", value: "movie" },
    { title: "TV Shows", value: "tv" },
  ];

  const getData = async () => {
    try {
      const response = await fetch(`http://localhost:5001/api/v1/${selectedOption.value}/trending`);
      const result = await response.json();
      setData(result.content || []);
    } catch (error) {
      console.error(error);
    }
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setSelectedItem(null);
  };

  useEffect(() => {
    getData();
  }, [selectedOption]);

  useEffect(() => {
    if (selectedItem) {
      setModalOpen(true);
    }
  }, [selectedItem]);

  useEffect(() => {
    document.body.style.overflow = modalOpen ? "hidden" : "scroll";
  }, [modalOpen]);

  return (
    <div className="text-white bg-black">
      <div className="py-20 w-full px-[130px]">
        <h3 className="text-3xl font-semibold mb-4">Trending Now</h3>
        <select
          value={selectedOption.value}
          onChange={(e) =>
            setSelectedOption(options.find((op) => op.value === e.target.value))
          }
          className="w-[280px] h-[40px] mr-5 bg-black/50 rounded-[5px] border border-gray-600"
        >
          {options.map((op) => (
            <option key={op.value} value={op.value}>
              {op.title}
            </option>
          ))}
        </select>

        <div className="relative" >
          <ScrollButton direction="left" />

          <div id="movie-card-container" className="w-full flex gap-12 overflow-scroll overflow-x-hidden overflow-y-hidden py-5 pl-7">
            {data.map((item, index) => (
              <MovieCard key={item.id} setSelectedItem={setSelectedItem} item={item} index={index} />
            ))}
          </div>

          <ScrollButton direction="right" /> 
        </div>

        


        {modalOpen && (
          <Modal scrollY={scrollY} data={selectedItem} handleModalClose={handleModalClose} />
        )}
      </div>
    </div>
  );
};

export default Trending;
