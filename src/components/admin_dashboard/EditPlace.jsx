import { doc, updateDoc } from "firebase/firestore";
import React, { useRef, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { db } from "../firebase/firebase";

function EditPlace() {
  const [name, setName] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [placeName, setPlaceName] = useState("Place");
  const scroll = useRef(null);
  const { currentUser } = useAuth();

  const handleClickUpdateDocuments = async () => {
    //To send the hospital information in our database
    if (placeName === "Place") {
      alert("Please select a place");
      scroll.current?.scrollIntoView({ behavior: "smooth" });
      return;
    }
    try {
      await updateDoc(doc(db, placeName, currentUser.email), {
        displayName: name,
        email: email,
        street: street,
        city: city,
        province: province,
        contactNumber: contactNumber,
      });
      alert("Update Succesfully");
      setPlaceName("Place");
      setName("");
      setEmail("");
      setContactNumber("");
      setStreet("");
      setCity("");
      setProvince("");
    } catch (e) {
      alert("Failed to edit, Make sure that you input correct information");
    }
    scroll.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleClickUpdateLocation = () => {
    if (placeName === "Place") {
      alert("Please select a place");
      scroll.current?.scrollIntoView({ behavior: "smooth" });
      return;
    }

    const geolocationAPI = navigator.geolocation;
    if (!geolocationAPI) {
      alert("Geolocation API is not available in your browser!");
    } else {
      geolocationAPI.getCurrentPosition(
        async (position) => {
          const { coords } = position;
          try {
            await updateDoc(doc(db, placeName, currentUser.email), {
              latitude: coords.latitude,
              longitude: coords.longitude,
            });
            alert("Update Succesfully");
            setPlaceName("Place");
            scroll.current?.scrollIntoView({ behavior: "smooth" });
          } catch (e) {
            alert(
              "Error updating document, Make sure that you select correct place"
            );
            scroll.current?.scrollIntoView({ behavior: "smooth" });
          }
        },
        () => {
          alert("No location found");
        }
      );
    }
  };

  return (
    <div className="flex h-full w-full justify-center">
      <span ref={scroll}></span>
      <form
        className="md:w-[400px] m-2 lg:w-[800px] max-w-[800px] justify-center"
        onSubmit={(e) => {
          e.preventDefault();
          handleClickUpdateDocuments();
        }}
      >
        <h2 className="text-2xl font-bold text-center">Edit Place</h2>
        <div className="mt-2">
          <label>
            Select a place:
            <select
              value={placeName}
              onChange={(event) => setPlaceName(event.target.value)}
              className={
                placeName === "Place"
                  ? "ml-2 border border-solid border-gray-400 text-gray-400 p-1 bg-white"
                  : "ml-2 border border-solid border-black p-1 bg-white"
              }
            >
              <option value="Place" className="text-gray-400">
                Place
              </option>
              <option value="Hospital" className="text-black">
                Hospital
              </option>
              <option value="Gym" className="text-black">
                Gym
              </option>
              <option value="Clinic" className="text-black">
                Clinic
              </option>
              <option value="Vet" className="text-black">
                Vet
              </option>
              <option value="Taxi" className="text-black">
                Taxi
              </option>
              <option value="Jeep" className="text-black">
                Jeep
              </option>
              <option value="Bus" className="text-black">
                Bus
              </option>
              <option value="Restaurant" className="text-black">
                Restaurant
              </option>
              <option value="Fast Food" className="text-black">
                Fast Food
              </option>
              <option value="Lomihan" className="text-black">
                Lomihan
              </option>
              <option value="Pancitan" className="text-black">
                Pancitan
              </option>
              <option value="Yelo" className="text-black">
                Yelo
              </option>
              <option value="Ice Tubig" className="text-black">
                Ice Tubig
              </option>
              <option value="Ice Cube" className="text-black">
                Ice Cube
              </option>
            </select>
          </label>
        </div>
        <div className="flex flex-col py-2">
          <label>Enter New Name</label>
          <input
            className="rounded-lg border-solid border-2 border-gray-400 mt-2 p-2 focus:border-black focus:outline-none"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </div>
        <div className="flex flex-col py-2">
          <label>Enter New Email</label>
          <input
            className="rounded-lg border-solid border-2 border-gray-400 mt-2 p-2 focus:border-black focus:outline-none"
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <div className="flex flex-col py-2">
          <label>Enter New Contact Number</label>
          <input
            className="rounded-lg border-solid border-2 border-gray-400 mt-2 p-2 focus:border-black focus:outline-none"
            type="text"
            value={contactNumber}
            onChange={(event) => setContactNumber(event.target.value)}
            required
          />
        </div>
        <div className="flex flex-col py-2">
          <label>Enter New Street</label>
          <input
            className="rounded-lg border-solid border-2 border-gray-400 mt-2 p-2 focus:border-black focus:outline-none"
            type="text"
            value={street}
            onChange={(event) => setStreet(event.target.value)}
          />
        </div>
        <div className="flex flex-col py-2">
          <label>Enter New City</label>
          <input
            className="rounded-lg border-solid border-2 border-gray-400 mt-2 p-2 focus:border-black focus:outline-none"
            type="text"
            value={city}
            onChange={(event) => setCity(event.target.value)}
          />
        </div>
        <div className="flex flex-col py-2">
          <label>Enter New Province</label>
          <input
            className="rounded-lg border-solid border-2 border-gray-400 mt-2 p-2 focus:border-black focus:outline-none"
            type="text"
            value={province}
            onChange={(event) => setProvince(event.target.value)}
          />
        </div>
        <div className="flex gap-2 flex-col md:flex-row justify-center items-center p-5">
          <button
            type="submit"
            className="w-[200px] py-2 bg-[#00dfad] font-semibold rounded-lg"
          >
            Update Documents
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              handleClickUpdateLocation();
            }}
            className="w-[200px] py-2 border border-solid border-black text-[#00dfad] font-semibold rounded-lg"
          >
            Update GPS Location
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditPlace;
