"use client";

const CooursesList = () => {
  return (
    <li class="pt-1 w-full h-40 overflow-y-scroll scroll-smooth focus:scroll-auto border-b  border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
      <div class="items-center ps-3">
        {/* =======================================================SEAITE==================================================== */}
        {/* BS ARCHITECTURE */}
        <div class=" items-center mb-4">
          <input
            id="BSA"
            type="radio"
            value=""
            name="default-radio"
            disabled={!isCourseEnabled}
            className={`w-4 h-4  border-gray-300  ${
              isCourseEnabled
                ? "bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-blue-500 focus:ring-2 text-blue-600"
                : "bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-gray-500 focus:ring-2 text-gray-200"
            }`}
          />
          <label
            for="BSA"
            disabled={!isCourseEnabled}
            class={`ml-2 text-sm font-medium ${
              isCourseEnabled
                ? "ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                : "ml-2 text-sm font-medium text-gray-400  dark:text-gray-300"
            }`}
          >
            BSA
          </label>
        </div>
        {/* BS CIVIL ENGINEERING */}
        <div class="flex items-center mb-4">
          <input
            id="BSCE"
            type="radio"
            value=""
            name="default-radio"
            disabled={!isCourseEnabled}
            className={`w-4 h-4  border-gray-300  ${
              isCourseEnabled
                ? "bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-blue-500 focus:ring-2 text-blue-600"
                : "bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-gray-500 focus:ring-2 text-gray-200"
            }`}
          />
          <label
            for="BSCE"
            disabled={!isCourseEnabled}
            class={`ml-2 text-sm font-medium ${
              isCourseEnabled
                ? "ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                : "ml-2 text-sm font-medium text-gray-400  dark:text-gray-300"
            }`}
          >
            BSCE
          </label>
        </div>
        {/* BS Computer Engineering */}
        <div class="flex items-center mb-4">
          <input
            id="BSCpE"
            type="radio"
            value=""
            name="default-radio"
            disabled={!isCourseEnabled}
            className={`w-4 h-4  border-gray-300  ${
              isCourseEnabled
                ? "bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-blue-500 focus:ring-2 text-blue-600"
                : "bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-gray-500 focus:ring-2 text-gray-200"
            }`}
          />
          <label
            for="BSCpE"
            disabled={!isCourseEnabled}
            class={`ml-2 text-sm font-medium ${
              isCourseEnabled
                ? "ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                : "ml-2 text-sm font-medium text-gray-400  dark:text-gray-300"
            }`}
          >
            BSCpE
          </label>
        </div>
        {/* BS Electrical Engineering */}
        <div class="flex items-center mb-4">
          <input
            id="BSEE"
            type="radio"
            value=""
            name="default-radio"
            disabled={!isCourseEnabled}
            className={`w-4 h-4  border-gray-300  ${
              isCourseEnabled
                ? "bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-blue-500 focus:ring-2 text-blue-600"
                : "bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-gray-500 focus:ring-2 text-gray-200"
            }`}
          />
          <label
            for="BSEE"
            disabled={!isCourseEnabled}
            class={`ml-2 text-sm font-medium ${
              isCourseEnabled
                ? "ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                : "ml-2 text-sm font-medium text-gray-400  dark:text-gray-300"
            }`}
          >
            BSEE
          </label>
        </div>
        {/* BS Electronics Engineering*/}
        <div class="flex items-center mb-4">
          <input
            id="BSECE"
            type="radio"
            value=""
            name="default-radio"
            disabled={!isCourseEnabled}
            className={`w-4 h-4  border-gray-300  ${
              isCourseEnabled
                ? "bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-blue-500 focus:ring-2 text-blue-600"
                : "bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-gray-500 focus:ring-2 text-gray-200"
            }`}
          />
          <label
            for="BSECE"
            disabled={!isCourseEnabled}
            class={`ml-2 text-sm font-medium ${
              isCourseEnabled
                ? "ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                : "ml-2 text-sm font-medium text-gray-400  dark:text-gray-300"
            }`}
          >
            BSECE
          </label>
        </div>
        {/* BS Geodetic Engineering */}
        <div class="flex items-center mb-4">
          <input
            id="BSGE"
            type="radio"
            value=""
            name="default-radio"
            disabled={!isCourseEnabled}
            className={`w-4 h-4  border-gray-300  ${
              isCourseEnabled
                ? "bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-blue-500 focus:ring-2 text-blue-600"
                : "bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-gray-500 focus:ring-2 text-gray-200"
            }`}
          />
          <label
            for="BSGE"
            disabled={!isCourseEnabled}
            class={`ml-2 text-sm font-medium ${
              isCourseEnabled
                ? "ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                : "ml-2 text-sm font-medium text-gray-400  dark:text-gray-300"
            }`}
          >
            BSGE
          </label>
        </div>
        {/* BS Computer Science */}
        <div class="flex items-center mb-4">
          <input
            id="BSCS"
            type="radio"
            value=""
            name="default-radio"
            disabled={!isCourseEnabled}
            className={`w-4 h-4  border-gray-300  ${
              isCourseEnabled
                ? "bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-blue-500 focus:ring-2 text-blue-600"
                : "bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-gray-500 focus:ring-2 text-gray-200"
            }`}
          />
          <label
            for="BSCS"
            disabled={!isCourseEnabled}
            class={`ml-2 text-sm font-medium ${
              isCourseEnabled
                ? "ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                : "ml-2 text-sm font-medium text-gray-400  dark:text-gray-300"
            }`}
          >
            BSCS
          </label>
        </div>
        {/* BS Information Technology */}
        <div class="flex items-center mb-4">
          <input
            id="BSIT"
            type="radio"
            value=""
            name="default-radio"
            disabled={!isCourseEnabled}
            className={`w-4 h-4  border-gray-300  ${
              isCourseEnabled
                ? "bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-blue-500 focus:ring-2 text-blue-600"
                : "bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-gray-500 focus:ring-2 text-gray-200"
            }`}
          />
          <label
            for="BSIT"
            disabled={!isCourseEnabled}
            class={`ml-2 text-sm font-medium ${
              isCourseEnabled
                ? "ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                : "ml-2 text-sm font-medium text-gray-400  dark:text-gray-300"
            }`}
          >
            BSIT
          </label>
        </div>
        {/* =======================================================SEAITE==================================================== */}
        {/* ========================================================SABH===================================================== */}
        {/* BS Accountancy */}
        <div class="flex items-center mb-4">
          <input
            id="BSA"
            type="radio"
            value=""
            name="default-radio"
            disabled={!isCourseEnabled}
            className={`w-4 h-4  border-gray-300  ${
              isCourseEnabled
                ? "bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-blue-500 focus:ring-2 text-blue-600"
                : "bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-gray-500 focus:ring-2 text-gray-200"
            }`}
          />
          <label
            for="BSA"
            disabled={!isCourseEnabled}
            class={`ml-2 text-sm font-medium ${
              isCourseEnabled
                ? "ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                : "ml-2 text-sm font-medium text-gray-400  dark:text-gray-300"
            }`}
          >
            BSA
          </label>
        </div>
        {/* BS Business Administration */}
        <div class="flex items-center mb-4">
          <input
            id="BSBA"
            type="radio"
            value=""
            name="default-radio"
            disabled={!isCourseEnabled}
            className={`w-4 h-4  border-gray-300  ${
              isCourseEnabled
                ? "bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-blue-500 focus:ring-2 text-blue-600"
                : "bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-gray-500 focus:ring-2 text-gray-200"
            }`}
          />
          <label
            for="BSBA"
            disabled={!isCourseEnabled}
            class={`ml-2 text-sm font-medium ${
              isCourseEnabled
                ? "ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                : "ml-2 text-sm font-medium text-gray-400  dark:text-gray-300"
            }`}
          >
            BSBA
          </label>
        </div>
        {/* BS Management Accounting */}
        <div class="flex items-center mb-4">
          <input
            id="BSMA"
            type="radio"
            value=""
            name="default-radio"
            disabled={!isCourseEnabled}
            className={`w-4 h-4  border-gray-300  ${
              isCourseEnabled
                ? "bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-blue-500 focus:ring-2 text-blue-600"
                : "bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-gray-500 focus:ring-2 text-gray-200"
            }`}
          />
          <label
            for="BSMA"
            disabled={!isCourseEnabled}
            class={`ml-2 text-sm font-medium ${
              isCourseEnabled
                ? "ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                : "ml-2 text-sm font-medium text-gray-400  dark:text-gray-300"
            }`}
          >
            BSMA
          </label>
        </div>
        {/* BS Hospitality Management */}
        <div class="flex items-center mb-4">
          <input
            id="BSHM"
            type="radio"
            value=""
            name="default-radio"
            disabled={!isCourseEnabled}
            className={`w-4 h-4  border-gray-300  ${
              isCourseEnabled
                ? "bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-blue-500 focus:ring-2 text-blue-600"
                : "bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-gray-500 focus:ring-2 text-gray-200"
            }`}
          />
          <label
            for="BSHM"
            disabled={!isCourseEnabled}
            class={`ml-2 text-sm font-medium ${
              isCourseEnabled
                ? "ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                : "ml-2 text-sm font-medium text-gray-400  dark:text-gray-300"
            }`}
          >
            BSHM
          </label>
        </div>
        {/* BS Tourism Management */}
        <div class="flex items-center mb-4">
          <input
            id="BSTM"
            type="radio"
            value=""
            name="default-radio"
            disabled={!isCourseEnabled}
            className={`w-4 h-4  border-gray-300  ${
              isCourseEnabled
                ? "bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-blue-500 focus:ring-2 text-blue-600"
                : "bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-gray-500 focus:ring-2 text-gray-200"
            }`}
          />
          <label
            for="BSTM"
            disabled={!isCourseEnabled}
            class={`ml-2 text-sm font-medium ${
              isCourseEnabled
                ? "ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                : "ml-2 text-sm font-medium text-gray-400  dark:text-gray-300"
            }`}
          >
            BSTM
          </label>
        </div>
        {/* ========================================================SABH===================================================== */}

        {/* ==========================================================SEAS===================================================== */}
        {/* BS Political Science */}
        <div class="flex items-center mb-4">
          <input
            id="BSPolScie"
            type="radio"
            value=""
            name="default-radio"
            disabled={!isCourseEnabled}
            className={`w-4 h-4  border-gray-300  ${
              isCourseEnabled
                ? "bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-blue-500 focus:ring-2 text-blue-600"
                : "bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-gray-500 focus:ring-2 text-gray-200"
            }`}
          />
          <label
            for="BSPolScie"
            disabled={!isCourseEnabled}
            class={`ml-2 text-sm font-medium ${
              isCourseEnabled
                ? "ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                : "ml-2 text-sm font-medium text-gray-400  dark:text-gray-300"
            }`}
          >
            BSPolScie
          </label>
        </div>
        {/* BS Psychology*/}
        <div class="flex items-center mb-4">
          <input
            id="BSPsych"
            type="radio"
            value=""
            name="default-radio"
            disabled={!isCourseEnabled}
            className={`w-4 h-4  border-gray-300  ${
              isCourseEnabled
                ? "bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-blue-500 focus:ring-2 text-blue-600"
                : "bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-gray-500 focus:ring-2 text-gray-200"
            }`}
          />
          <label
            for="BSPsych"
            disabled={!isCourseEnabled}
            class={`ml-2 text-sm font-medium ${
              isCourseEnabled
                ? "ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                : "ml-2 text-sm font-medium text-gray-400  dark:text-gray-300"
            }`}
          >
            BSPsych
          </label>
        </div>
        {/* Bachelor of Elementary Education*/}
        <div class="flex items-center mb-4">
          <input
            id="BEE"
            type="radio"
            value=""
            name="default-radio"
            disabled={!isCourseEnabled}
            className={`w-4 h-4  border-gray-300  ${
              isCourseEnabled
                ? "bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-blue-500 focus:ring-2 text-blue-600"
                : "bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-gray-500 focus:ring-2 text-gray-200"
            }`}
          />
          <label
            for="BEE"
            disabled={!isCourseEnabled}
            class={`ml-2 text-sm font-medium ${
              isCourseEnabled
                ? "ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                : "ml-2 text-sm font-medium text-gray-400  dark:text-gray-300"
            }`}
          >
            BEE
          </label>
        </div>
        {/* Bachelor of Secondary Education*/}
        <div class="flex items-center mb-4">
          <input
            id="BSE"
            type="radio"
            value=""
            name="default-radio"
            disabled={!isCourseEnabled}
            className={`w-4 h-4  border-gray-300  ${
              isCourseEnabled
                ? "bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-blue-500 focus:ring-2 text-blue-600"
                : "bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-gray-500 focus:ring-2 text-gray-200"
            }`}
          />
          <label
            for="BSE"
            disabled={!isCourseEnabled}
            class={`ml-2 text-sm font-medium ${
              isCourseEnabled
                ? "ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                : "ml-2 text-sm font-medium text-gray-400  dark:text-gray-300"
            }`}
          >
            BSE
          </label>
        </div>
        {/* Bachelor of Physical Education*/}
        <div class="flex items-center mb-4">
          <input
            id="BPE"
            type="radio"
            value=""
            name="default-radio"
            disabled={!isCourseEnabled}
            className={`w-4 h-4  border-gray-300  ${
              isCourseEnabled
                ? "bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-blue-500 focus:ring-2 text-blue-600"
                : "bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-gray-500 focus:ring-2 text-gray-200"
            }`}
          />
          <label
            for="BPE"
            disabled={!isCourseEnabled}
            class={`ml-2 text-sm font-medium ${
              isCourseEnabled
                ? "ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                : "ml-2 text-sm font-medium text-gray-400  dark:text-gray-300"
            }`}
          >
            BPE
          </label>
        </div>
        {/* BS Criminology*/}
        <div class="flex items-center mb-4">
          <input
            id="BSCrim"
            type="radio"
            value=""
            name="default-radio"
            disabled={!isCourseEnabled}
            className={`w-4 h-4  border-gray-300  ${
              isCourseEnabled
                ? "bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-blue-500 focus:ring-2 text-blue-600"
                : "bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-gray-500 focus:ring-2 text-gray-200"
            }`}
          />
          <label
            for="BSCrim"
            disabled={!isCourseEnabled}
            class={`ml-2 text-sm font-medium ${
              isCourseEnabled
                ? "ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                : "ml-2 text-sm font-medium text-gray-400  dark:text-gray-300"
            }`}
          >
            BSCrim
          </label>
        </div>
        {/* ==========================================================SEAS===================================================== */}
        {/* ==========================================================SHAS===================================================== */}

        {/* BS Medical Technology*/}
        <div class="flex items-center mb-4">
          <input
            id="BSMedTech"
            type="radio"
            value=""
            name="default-radio"
            disabled={!isCourseEnabled}
            className={`w-4 h-4  border-gray-300  ${
              isCourseEnabled
                ? "bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-blue-500 focus:ring-2 text-blue-600"
                : "bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-gray-500 focus:ring-2 text-gray-200"
            }`}
          />
          <label
            for="BSMedTech"
            disabled={!isCourseEnabled}
            class={`ml-2 text-sm font-medium ${
              isCourseEnabled
                ? "ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                : "ml-2 text-sm font-medium text-gray-400  dark:text-gray-300"
            }`}
          >
            BSMedTech
          </label>
        </div>
        {/* BS Medical Laboratory Science*/}
        <div class="flex items-center mb-4">
          <input
            id="BSMLS"
            type="radio"
            value=""
            name="default-radio"
            disabled={!isCourseEnabled}
            className={`w-4 h-4  border-gray-300  ${
              isCourseEnabled
                ? "bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-blue-500 focus:ring-2 text-blue-600"
                : "bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-gray-500 focus:ring-2 text-gray-200"
            }`}
          />
          <label
            for="BSMLS"
            disabled={!isCourseEnabled}
            class={`ml-2 text-sm font-medium ${
              isCourseEnabled
                ? "ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                : "ml-2 text-sm font-medium text-gray-400  dark:text-gray-300"
            }`}
          >
            BSMLS
          </label>
        </div>
        {/* BS Nursing*/}
        <div class="flex items-center mb-4">
          <input
            id="BSN"
            type="radio"
            value=""
            name="default-radio"
            disabled={!isCourseEnabled}
            className={`w-4 h-4  border-gray-300  ${
              isCourseEnabled
                ? "bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-blue-500 focus:ring-2 text-blue-600"
                : "bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-gray-500 focus:ring-2 text-gray-200"
            }`}
          />
          <label
            for="BSN"
            disabled={!isCourseEnabled}
            class={`ml-2 text-sm font-medium ${
              isCourseEnabled
                ? "ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                : "ml-2 text-sm font-medium text-gray-400  dark:text-gray-300"
            }`}
          >
            BSN
          </label>
        </div>
        {/* BS Pharmacy*/}
        <div class="flex items-center mb-4">
          <input
            id="BSP"
            type="radio"
            value=""
            name="default-radio"
            disabled={!isCourseEnabled}
            className={`w-4 h-4  border-gray-300  ${
              isCourseEnabled
                ? "bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-blue-500 focus:ring-2 text-blue-600"
                : "bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-gray-500 focus:ring-2 text-gray-200"
            }`}
          />
          <label
            for="BSP"
            disabled={!isCourseEnabled}
            class={`ml-2 text-sm font-medium ${
              isCourseEnabled
                ? "ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                : "ml-2 text-sm font-medium text-gray-400  dark:text-gray-300"
            }`}
          >
            BSP
          </label>
        </div>
        {/* ==========================================================SHAS===================================================== */}
      </div>
    </li>
  );
};
export default CooursesList;
