import { doc, setDoc } from "firebase/firestore";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { db } from "../firebase/firebase";

function AddPlace() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [adminName, setAdminName] = useState("");
  const [adminEmail, setAdminEmail] = useState("");
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const geolocationAPI = navigator.geolocation;
  const { currentUser } = useAuth();
  // For photo: Not implemented yet
  const [photo] = useState("");
  const [placeName, setPlaceName] = useState("Place");
  const scroll = useRef(null);

  const getLocation = useCallback(() => {
    if (!geolocationAPI) {
      alert("Geolocation API is not available in your browser!");
    } else {
      geolocationAPI.getCurrentPosition(
        (position) => {
          const { coords } = position;
          setLat(coords.latitude);
          setLong(coords.longitude);
        },
        (error) => {
          console.log(error.message);
        }
      );
    }
  }, [geolocationAPI]);

  useEffect(() => {
    getLocation();
    if (currentUser) {
      setAdminName(currentUser.displayName);
      setAdminEmail(currentUser.email);
    }
  }, [currentUser, getLocation]);

  //To add the hospital in the database
  const addPlace = async () => {
    // To check if the admin selected a place
    if (placeName === "Place") {
      alert("Please select a place");
      scroll.current?.scrollIntoView({ behavior: "smooth" });
      return;
    } else if (lat === null || long === null) {
      alert("No location found, Please allow access to location");
      getLocation();
      return;
    }
    //To send the hospital information in our database
    try {
      await setDoc(doc(db, placeName, currentUser.email), {
        adminName: adminName,
        adminEmail: adminEmail,
        displayName: name,
        street: street,
        city: city,
        province: province,
        contactNumber: contactNumber,
        email: email,
        latitude: lat,
        longitude: long,
        //If the user upload a photo use the photo if not use the default profile picture
        //Not yet implemented
        photoURL:
          photo || "https://cdn-icons-png.flaticon.com/512/1527/1527531.png",
      });
      alert("Added Succesfully");
      setPlaceName("Place");
      setName("");
      setEmail("");
      setContactNumber("");
      setStreet("");
      setCity("");
      setProvince("");
    } catch (e) {
      alert("Failed to add location, Please try again");
    }
    scroll.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex h-full w-full justify-center">
      <span ref={scroll}></span>
      <form
        className="md:w-[400px] m-2 lg:w-[800px] max-w-[800px] justify-center"
        onSubmit={(e) => {
          e.preventDefault();
          addPlace();
        }}
      >
        <h2 className="text-2xl font-bold text-center">Add Place</h2>
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
          <label>Name</label>
          <input
            className="rounded-lg border-solid border-2 border-gray-400 mt-2 p-2 focus:border-black focus:outline-none"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </div>
        <div className="flex flex-col py-2">
          <label>Email</label>
          <input
            className="rounded-lg border-solid border-2 border-gray-400 mt-2 p-2 focus:border-black focus:outline-none"
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <div className="flex flex-col py-2">
          <label>Contact Number</label>
          <input
            className="rounded-lg border-solid border-2 border-gray-400 mt-2 p-2 focus:border-black focus:outline-none"
            type="text"
            value={contactNumber}
            onChange={(event) => setContactNumber(event.target.value)}
            required
          />
        </div>
        <div className="flex flex-col py-2">
          <label>Street</label>
          <input
            className="rounded-lg border-solid border-2 border-gray-400 mt-2 p-2 focus:border-black focus:outline-none"
            type="text"
            value={street}
            onChange={(event) => setStreet(event.target.value)}
          />
        </div>
        <div className="flex flex-col py-2">
          <label>City</label>
          <input
            className="rounded-lg border-solid border-2 border-gray-400 mt-2 p-2 focus:border-black focus:outline-none"
            type="text"
            value={city}
            onChange={(event) => setCity(event.target.value)}
          />
        </div>
        <div className="flex flex-col py-2">
          <label>Province</label>
          <input
            className="rounded-lg border-solid border-2 border-gray-400 mt-2 p-2 focus:border-black focus:outline-none"
            type="text"
            value={province}
            onChange={(event) => setProvince(event.target.value)}
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="w-[200px] my-5 py-2 bg-[#00dfad] font-semibold rounded-lg"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddPlace;
