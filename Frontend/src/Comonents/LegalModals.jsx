import React from "react";

const LegalModals = () => {
  const currentDate = new Date();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const formattedDate = `${
    monthNames[currentDate.getMonth()]
  } ${currentDate.getFullYear()}`;

  return (
    <>
      {/* Privacy Policy Modal */}
      <dialog id="privacy_modal" className="modal">
        <div className="modal-box max-w-2xl">
          <h3 className="font-bold text-xl mb-2">Privacy Policy</h3>
          <p className="mb-3">
            Your privacy is important to us. We only collect necessary
            information to provide our services. We do not share your data
            without consent.
          </p>
          <p className="text-sm text-gray-500">Last updated: {formattedDate}</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>

      {/* Terms of Service Modal */}
      <dialog id="terms_modal" className="modal">
        <div className="modal-box max-w-2xl">
          <h3 className="font-bold text-xl mb-2">Terms of Service</h3>
          <p className="mb-3">
            By using our services, you agree to our terms. We reserve the right
            to modify these at any time.
          </p>
          <p className="text-sm text-gray-500">Effective: {formattedDate}</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default LegalModals;
