import React, { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { FcSms, FcAdvertising } from "react-icons/fc";

export default function Header() {
  return (
    <div className="h-16 px-4 bg-[#ebf2f3] flex items-center border-b border-black justify-end">
      <div className="flex items-center gap-2 mr-2">
        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button
                className={
                  open
                    ? "bg-gray-200 group inline-flex items-center rounded-sm p-1.5 hover:text-opacity-100 focus:outline-none"
                    : "group inline-flex items-center rounded-sm p-1.5 hover:text-opacity-100 focus:outline-none"
                }
              >
                <FcSms fontSize={24} />
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute right-0 z-10 mt-2.5 transform md:w-80 w-60">
                  <div className="bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5">
                    <strong className="font-medium">Messages</strong>
                    <div
                      onClick={() => {
                        alert("Inside message");
                      }}
                      className="mt-2 py-1 text-sm hover:bg-gray-100 cursor-pointer"
                    >
                      This is messages.
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button
                className={
                  open
                    ? "bg-gray-200 group inline-flex items-center rounded-sm p-1.5 hover:text-opacity-100 focus:outline-none"
                    : "group inline-flex items-center rounded-sm p-1.5 hover:text-opacity-100 focus:outline-none"
                }
              >
                <FcAdvertising fontSize={24} />
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute right-0 z-10 mt-2.5 transform md:w-80 w-60">
                  <div className="bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5">
                    <strong className="font-medium">Notifications</strong>
                    <div className="mt-2 py-1 text-sm">
                      This is notification panel.
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      </div>
    </div>
  );
}
