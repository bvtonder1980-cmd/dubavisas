function __(ElementId) {
  return $$(ElementId);
}


function _Days() {
  let days = [];

  days.push({ Number: 0, NumberText: `d` });

  for (let i = 1; i <= 31; i++) {
    days.push({ Number: i, NumberText: i < 10 ? `0${i}` : `${i}` });
  }

  return days;
}

const _Months = [
  { Number: 0, NumberText: `00`, Abbreviation: `m`, Name: `Month`, Days: 0 },
  {
    Number: 1,
    NumberText: `01`,
    Abbreviation: `Jan`,
    Name: `January`,
    Days: 31,
  },
  {
    Number: 2,
    NumberText: `02`,
    Abbreviation: `Feb`,
    Name: `February`,
    Days: 29,
  },
  { Number: 3, NumberText: `03`, Abbreviation: `Mar`, Name: `March`, Days: 31 },
  { Number: 4, NumberText: `04`, Abbreviation: `Apr`, Name: `April`, Days: 30 },
  { Number: 5, NumberText: `05`, Abbreviation: `May`, Name: `May`, Days: 31 },
  { Number: 6, NumberText: `06`, Abbreviation: `Jun`, Name: `June`, Days: 30 },
  { Number: 7, NumberText: `07`, Abbreviation: `Jul`, Name: `July`, Days: 31 },
  {
    Number: 8,
    NumberText: `08`,
    Abbreviation: `Aug`,
    Name: `August`,
    Days: 31,
  },
  {
    Number: 9,
    NumberText: `09`,
    Abbreviation: `Sep`,
    Name: `September`,
    Days: 30,
  },
  {
    Number: 10,
    NumberText: `10`,
    Abbreviation: `Oct`,
    Name: `October`,
    Days: 31,
  },
  {
    Number: 11,
    NumberText: `11`,
    Abbreviation: `Nov`,
    Name: `November`,
    Days: 30,
  },
  {
    Number: 12,
    NumberText: `12`,
    Abbreviation: `Dec`,
    Name: `December`,
    Days: 31,
  },
];

function _Years(subtractions, additions, reverse) {
  let currDate = new Date();
  let currYear = currDate.getFullYear();
  let years = [];

  years.push({ Number: 0, NumberText: `y` });

  if (reverse === false) {
    for (let i = currYear - subtractions; i <= currYear + additions; i++) {
      years.push({ Number: i, NumberText: i });
    }
  } else {
    for (let i = currYear + additions; i >= currYear - subtractions; i--) {
      years.push({ Number: i, NumberText: i });
    }
  }

  return years;
}

const _Titles = [
  { Value: `Select`, Text: `` },
  { Value: `Mr`, Text: `Mr` },
  { Value: `Mrs`, Text: `Mrs` },
  { Value: `Mstr`, Text: `Mstr` },
  { Value: `Miss`, Text: `Miss` },
  { Value: `Dr`, Text: `Dr` },
  { Value: `Prof`, Text: `Prof` },
  { Value: `Hon`, Text: `Hon` },
];

const _VisaResults = [
  { Value: `-1`, Text: `Awaiting Result` },
  { Value: `1`, Text: `Approved` },
  { Value: `0`, Text: `Denied` },
];

const _LocalHostNames = [`dubaivisasonline.local`, "localhost"];

function ContactUs() {
  fetch(`./_contactus.php`, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "manual", // manual, *follow, error
    referrerPolicy: "same-origin", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: new FormData($$(`frmContactUs`)),
  })
    .then((promise) => {
      console.log(promise);
      if (promise.status === 200) {
        $$(
          `divContactUsNotification`
        ).innerHTML = `<div class="alert alert-success">Your request was sent to our offices. Please allow up to 48 hours for a response.</div>`;
      } else {
        $$(
          `divContactUsNotification`
        ).innerHTML = `<div class="alert alert-danger">An error occurred while contacting our offices, please try again!</div>`;
      }
    })
    .catch((e) => {
      console.info(`Err`, e);
    });
}

function CheckIfAssistable() {
  const fakeCountries = [`-`, `--`];
  const deniedCountries = [`BD`, `NG`, `PK`];

  let cbxAssistDay = $$(`cbxAssistDay`);
  let cbxAssistMonth = $$(`cbxAssistMonth`);
  let cbxAssistYear = $$(`cbxAssistYear`);
  let cbxAssistCitizen = $$(`cbxAssistCitizen`);
  let cbxAssistLivingIn = $$(`cbxAssistLivingIn`);

  let divAssistNotification = $$(`divAssistNotification`);

  // Temp
  const day = parseInt(cbxAssistDay.value, 10);
  const month = parseInt(cbxAssistMonth.value, 10) - 1; // JS months: 0–11
  const year = parseInt(cbxAssistYear.value, 10);

  // Guard against incomplete selections
  if (!day || month < 0 || !year) {
    return;
  }

  if (
    fakeCountries.indexOf(cbxAssistCitizen.value) === -1 &&
    fakeCountries.indexOf(cbxAssistLivingIn.value) === -1
  ) {
    divAssistNotification.classList.remove(`d-none`);
    if (
      deniedCountries.indexOf(cbxAssistCitizen.value) === -1 &&
      deniedCountries.indexOf(cbxAssistLivingIn.value) === -1
    ) {
      divAssistNotification.firstElementChild.classList.add(`d-none`);
      divAssistNotification.firstElementChild.innerHTML = `Yes, DubaiVisasOnline is able to assist you with your UAE Visa.`;
      divAssistNotification.getElementsByTagName(`button`)[0].disabled = false;
    } else {
      divAssistNotification.firstElementChild.classList.remove(`d-none`);
      divAssistNotification.firstElementChild.innerHTML = `Sorry, we are unable to help you to apply for a UAE visa.`;
      divAssistNotification.getElementsByTagName(`button`)[0].disabled = true;
    }
  }
}

function Router(data, onSuccess, onError) {
  fetch(`./_router.php`, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "same-origin", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: data,
  })
    .then((promise) => promise.json())
    .then((data) => {
      if (data.Error == null && data.Error == undefined) {
        onSuccess(data);
      } else {
        onError(data.Error);
      }
    })
    .catch((e) => {
      if (String(e).indexOf(`Failed to fetch`) >= 0) {
        setTimeout(function () {
          window.Router(data, onSuccess, onError);
        }, 500);
      } else {
        onError(e);
      }
    });
}

function PostForm(form, onSuccess, onError) {
  const formData = new FormData(form);
  fetch(`./_router.php`, {
    method: "POST",
    body: formData,
  })
    .then((promise) => promise.json())
    .then((data) => {
      if (data.Error == null && data.Error == undefined) {
        if (typeof onSuccess === `function`) {
          onSuccess(data);
        }
      } else {
        onError(data.Error);
      }
    })
    .catch((e) => {
      onError(e);
    });
}

function Notify(Title, Text, CircleClass) {
  // Get existing containers
  const existingToasts = document.getElementsByClassName(`toast-container`);

  // Container
  let toastContainer =
    existingToasts.length > 0
      ? existingToasts[0]
      : document.createElement(`div`);
  toastContainer.className = `toast-container position-fixed bottom-0 end-0 p-3`;

  // Toast
  toastContainer.appendChild(document.createElement(`div`));
  toastContainer.lastElementChild.className = `toast text-bg-${CircleClass}`;
  toastContainer.lastElementChild.setAttribute(`role`, `alert`);
  toastContainer.lastElementChild.setAttribute(`aria-live`, `assertive`);
  toastContainer.lastElementChild.setAttribute(`aria-atomic`, `true`);

  // Header
  toastContainer.lastElementChild.appendChild(document.createElement(`div`));
  toastContainer.lastElementChild.children[0].className = `toast-header`;
  toastContainer.lastElementChild.children[0].innerHTML = `<i class="mdi mdi-circle text-${CircleClass} me-2"></i><strong class="me-auto">${Title}</strong><button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>`;

  // Body
  toastContainer.lastElementChild.appendChild(document.createElement(`div`));
  toastContainer.lastElementChild.children[1].className = `toast-body text-white`;
  toastContainer.lastElementChild.children[1].innerHTML = Text;

  // Add to the body
  document.body.appendChild(toastContainer);

  // Trigger the toast
  const toast = new bootstrap.Toast(toastContainer.lastElementChild);
  toast.show();

  if (window.userType == 1) {
    window.console.log(window.console.trace());
  }

  return toast;
}

function CheckLoginState() {
  
}

function checkLoginKeyPress(event) {
  if (event.which === 13) {
    $$(`btnLogin`).click();
  }
}

function LogIn(postLoginLocation = `/login.php`) {
  $$(
    `btnLogin`
  ).innerHTML = `<i class="mdi mdi-load mdi-spin me-2"></i>Loading...`;
  Router(
    JSON.stringify({
      RouteId: `0`,
      EmailAddress: $$(`txtLoginEmailAddress`).value,
      PassCode: $$(`txtLoginPassword`).value,
    }),
    function (data) {
      if (data.length === 0) {
        Notify(
          `Invalid credentials`,
          `The login credentials you specified were invalid!`,
          `danger`
        );
        $$(
          `btnLogin`
        ).innerHTML = `<i class="mdi mdi-lock-open me-2"></i>Log In`;
      } else if (data.length === 1) {
        SetCookie(`token`, data[0]["Token"], 1);
        window.location = postLoginLocation;
      } else {
        $$(`mdlLoginBody1`).classList.add(`d-none`);
        $$(`mdlLoginBody2`).classList.remove(`d-none`);
        $$(`mdlLogin`)
          .getElementsByClassName(`modal-footer`)[0]
          .classList.add(`d-none`);
        $$(`mdlLogin`).getElementsByClassName(
          `modal-title`
        )[0].innerHTML = `Please select an account:`;
        $$(`mdlLoginBody2`).firstElementChild.innerHTML = ``;
        for (let i = 0; i < data.length; i++) {
          let col = document.createElement(`div`);
          col.className = `col-12 cursor-pointer hoverable p-2 border border-light`;
          col.innerHTML = `${data[i].FirstName} ${data[i].LastName} (${
            data[i].UserType == 1 ? "Administrator" : "User"
          })`;

          col.addEventListener(`click`, function () {
            SetCookie(`token`, data[i]["Token"], 1);
            window.location =
              `${postLoginLocation}?vt=` +
              (window.visaTypeId !== null &&
              String(typeof window.visaTypeId) !== `undefined`
                ? window.visaTypeId
                : 0);
          });

          $$(`mdlLoginBody2`).appendChild(col);
        }
      }
    },
    function (e) {
      console.log(e);
      $$(
        `btnLogin`
      ).parentElement.parentElement.innerHTML += `<div class="col-12"><div class="alert alert-danger mt-4">${e}</div></div>`;
      $$(`btnLogin`).innerHTML = `<i class="mdi mdi-lock-open me-2"></i>Log In`;
    }
  );
}

function LogOut() {
  
}

function SetCookie(cookieName, cookieValue, expiryDays) {
  const d = new Date();
  d.setTime(d.getTime() + expiryDays * 24 * 60 * 60 * 1000);
  let expires = `expires=${d.toUTCString()}`;
  document.cookie = `${cookieName}=${encodeURIComponent(
    cookieValue
  )}; ${expires}; path=/`;
}

function GetCookie(cookieName) {
  let name = cookieName + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return decodeURIComponent(c.substring(name.length, c.length));
    }
  }
  return null;
}

function Register() {
  $$(`mdlApplication`).getElementsByClassName(
    `modal-title`
  )[0].innerHTML = `Please complete the form to register`;
  $$(`rowApply3`).classList.remove(`d-none`);
  $$(`rowApply2`).classList.add(`d-none`);
  $$(`mdlApplication`).classList.add(`modal-lg`);
  $$(`btnProceed1`).classList.remove(`d-none`);
  $$(`divRegistration0`).classList.remove(`d-none`);
  $$(`divRegistration1`).classList.add(`d-none`);
  $$(`btnBack1`).classList.add(`d-none`);

  $$(`btnProceed1`).classList.remove(`btn-primary`);
  $$(`btnProceed1`).classList.add(`btn-success`);
  $$(
    `btnProceed1`
  ).innerHTML = `Proceed<i class="mdi mdi-arrow-right ms-2"></i>`;

  $$(
    `rowApply3-alert`
  ).innerHTML = `<i class="mdi mdi-information me-2"></i>Registration is quick and free!`;
  $$(`rowApply3-alert`).classList.remove(`alert-warning`);
  $$(`rowApply3-alert`).classList.add(`alert-info`);

  // Replace the proceed button with a new button that has no event listeners
  var el = $$("btnProceed1"),
    elClone = el.cloneNode(true);
  el.parentNode.replaceChild(elClone, el);

  // Reassign the click event
  $$(`btnProceed1`).addEventListener(`click`, function () {
    let registrationType = document.querySelector(
      `input[name="radRegType"]:checked`
    );
    if (
      registrationType != null &&
      registrationType != undefined &&
      parseInt(registrationType.value) > 0
    ) {
      $$(`divRegistration0`).classList.add(`d-none`);
      $$(`divRegistration1`).classList.remove(`d-none`);
      $$(`btnBack1`).classList.remove(`d-none`);
      $$(`btnBack1`).addEventListener(`click`, function () {
        Register();
      });

      switch (parseInt(registrationType.value)) {
        case 1:
          $$(`divRegister_AgencyDetails`).classList.remove(`d-none`);
          $$(`divRegister_CorporateDetails`).classList.add(`d-none`);
          $$(`divRegister_AddressDetails`).classList.remove(`d-none`);
          $$(
            `rowApply3-alert`
          ).innerHTML = `<i class="mdi mdi-information me-2"></i>Please enter your own agency and personal details here and not that of your client`;
          $$(`rowApply3-alert`).classList.remove(`alert-info`);
          $$(`rowApply3-alert`).classList.add(`alert-warning`);
          break;
        case 2:
          $$(`divRegister_AgencyDetails`).classList.add(`d-none`);
          $$(`divRegister_CorporateDetails`).classList.remove(`d-none`);
          $$(`divRegister_AddressDetails`).classList.remove(`d-none`);
          $$(`divRegister_CorporateDetails_Optional`).classList.add(`d-none`);
          $$(
            `rowApply3-alert`
          ).innerHTML = `<i class="mdi mdi-information me-2"></i>Please enter your own company and personal details here`;
          $$(`rowApply3-alert`).classList.remove(`alert-info`);
          $$(`rowApply3-alert`).classList.add(`alert-warning`);
          break;
        case 3:
          $$(`divRegister_AgencyDetails`).classList.add(`d-none`);
          $$(`divRegister_CorporateDetails`).classList.remove(`d-none`);
          $$(`divRegister_AddressDetails`).classList.remove(`d-none`);
          $$(`divRegister_CorporateDetails_Optional`).classList.remove(
            `d-none`
          );
          $$(
            `rowApply3-alert`
          ).innerHTML = `<i class="mdi mdi-information me-2"></i>Please enter your company (optional) and personal details here`;
          $$(`rowApply3-alert`).classList.remove(`alert-info`);
          $$(`rowApply3-alert`).classList.add(`alert-warning`);
          break;
      }

      // Replace the proceed button with a new button that has no event listeners
      var el = $$("btnProceed1"),
        elClone = el.cloneNode(true);
      el.parentNode.replaceChild(elClone, el);

      // Reassign the click event
      $$(`btnProceed1`).classList.remove(`btn-info`);
      $$(`btnProceed1`).classList.add(`btn-success`);
      $$(
        `btnProceed1`
      ).innerHTML = `<i class="mdi mdi-check me-2"></i>Complete Registration`;
      $$(`btnProceed1`).addEventListener(`click`, function () {
        let consortiumName = $$(`txtRegister_ConsortiumName`).value.replace(
          `'`,
          `&apos;`
        );
        let agencyName = $$(`txtRegister_AgencyName`).value.replace(
          `'`,
          `&apos;`
        );
        let companyName = $$(`txtRegister_CompanyName`).value.replace(
          `'`,
          `&apos;`
        );
        let addressLine1 = $$(`txtRegister_AddressLine1`).value.replace(
          `'`,
          `&apos;`
        );
        let addressLine2 = $$(`txtRegister_AddressLine2`).value.replace(
          `'`,
          `&apos;`
        );
        let addressLine3 = $$(`txtRegister_AddressLine3`).value.replace(
          `'`,
          `&apos;`
        );
        let vatNumber = $$(`txtRegister_VatNo`).value.replace(`'`, `&apos;`);

        let title = $$(`txtRegister_Title`).value;
        let firstName = $$(`txtRegister_FirstName`).value.replace(
          `'`,
          `&apos;`
        );
        let surname = $$(`txtRegister_Surname`).value.replace(`'`, `&apos;`);
        let cell = $$(`txtRegister_Cell`).value.replace(`'`, `&apos;`);
        let emailAddress = $$(`txtRegister_EmailAddress`).value.replace(
          `'`,
          `&apos;`
        );
        let emailAddressConfirm = $$(
          `txtRegister_EmailAddressConfirm`
        ).value.replace(`'`, `&apos;`);
        let password = $$(`txtRegister_Password`).value.replace(`'`, `&apos;`);
        let passwordConfirm = $$(`txtRegister_PasswordConfirm`).value.replace(
          `'`,
          `&apos;`
        );

        let errorMessage = null;

        if (firstName.trim().length <= 1) {
          errorMessage = `Please enter your first name`;
        } else if (surname.trim().length <= 1) {
          errorMessage = `Please enter your surname`;
        } else if (cell.trim().length <= 1) {
          errorMessage = `Please enter your cell number`;
        } else if (emailAddress.trim().length <= 1) {
          errorMessage = `Please enter your email address`;
        } else if (emailAddressConfirm.trim().length <= 1) {
          errorMessage = `Please confirm your email address`;
        } else if (password.trim().length <= 1) {
          errorMessage = `Please enter a password`;
        } else if (passwordConfirm.trim().length <= 1) {
          errorMessage = `Please confirm your password`;
        } else if (emailAddress.trim() !== emailAddressConfirm.trim()) {
          errorMessage = `Your email address and confirmation email addresses do not match`;
        } else if (password.trim() !== passwordConfirm.trim()) {
          errorMessage = `Your password and confirmation password's do not match`;
        } else if (
          parseInt(registrationType.value) === 1 &&
          consortiumName.trim().length <= 1
        ) {
          errorMessage = `Please enter a valid consortium name`;
        } else if (
          parseInt(registrationType.value) === 1 &&
          agencyName.trim().length <= 1
        ) {
          errorMessage = `Please enter a valid agency name`;
        } else if (
          parseInt(registrationType.value) === 2 &&
          companyName.trim().length <= 1
        ) {
          errorMessage = `Please enter a valid company name`;
        } else if (
          parseInt(registrationType.value) < 3 &&
          addressLine1.trim().length <= 1
        ) {
          errorMessage = `Please enter a valid address`;
        } else if (
          parseInt(registrationType.value) < 3 &&
          vatNumber.trim().length <= 1
        ) {
          errorMessage = `Please enter a valid VAT number`;
        } else {
          $$(
            `btnProceed1`
          ).innerHTML = `<i class="mdi mdi-load mdi-spin me-2"></i>Loading...`;
          Router(
            JSON.stringify({
              RouteId: `1`,
              RegistrationType: `${parseInt(registrationType.value)}`,
              ConsortiumName: consortiumName,
              AgencyName: agencyName,
              CompanyName: companyName,
              AddressLine1: addressLine1,
              AddressLine2: addressLine2,
              AddressLine3: addressLine3,
              VatNumber: vatNumber,
              Title: title,
              FirstName: firstName,
              LastName: surname,
              Cell: cell,
              EmailAddress: emailAddress,
              PassCode: password,
            }),
            function (data) {
              SetCookie(`token`, data["Token"], 1);
              fbq("track", "CompleteRegistration");
              window.location =
                `/dashboard.php?cmd=apply&vt=` +
                (window.visaTypeId !== null &&
                String(typeof window.visaTypeId) !== `undefined`
                  ? window.visaTypeId
                  : 0);
            },
            function (e) {
              $$(
                `colLoginNotification`
              ).innerHTML = `<div class="alert alert-danger mt-2">You are already registered, perhaps you <a href="">forgot your password?</a></div>`;
              $$(
                `btnProceed1`
              ).innerHTML = `<i class="mdi mdi-check me-2"></i>Complete Registration`;
            }
          );
        }

        $$(`colLoginNotification`).innerHTML =
          errorMessage !== null
            ? `<div class="alert alert-danger">${errorMessage}</div>`
            : ``;
      });
    } else {
    }
  });
}

function ForgotPassword() {
  $$(`mdlLogin`).getElementsByClassName(`btn-close`)[0].click();

  let container = CreateElement({ Element: `div` });
  container.appendChild(
    CreateElement({
      Element: `input`,
      Type: `text`,
      ClassName: `form-control`,
      PlaceHolder: `Please enter your email address here`,
    })
  );

  CreatePopup(
    `Have you forgotten your password?`,
    container,
    `<i class='mdi mdi-lock me-2'></i>Request Password`,
    function () {
      if (container.firstElementChild.value.trim().length < 2) {
        Notify(
          `Invalid email address`,
          `Please enter your full email address.`,
          `danger`
        );
      } else {
        Router(
          JSON.stringify({
            RouteId: `2`,
            EmailAddress: container.firstElementChild.value,
          }),
          function (data) {
            if (Boolean(data.Success) === false) {
              Notify(`Error`, `An unexpected error occurred: ${e}.`, `danger`);
            } else {
              Notify(
                `Password requested`,
                `If you are registered with us, an email will be sent to your shortly.`,
                `success`
              );
              $$(`mdlMyModal-CloseButton`).click();
              $$(`btnRegister2`).parentElement.firstElementChild.click();
            }
          },
          function (e) {
            Notify(`Error`, `An unexpected error occurred: ${e}.`, `danger`);
          }
        );
      }
    },
    (cancelText = `<i class='mdi mdi-arrow-left me-2'></i>Back`),
    function () {
      $$(`mdlMyModal-CloseButton`).click();
    },
    null,
    true,
    false
  );
}

function CreatePopup(
  subject,
  body,
  confirmText,
  onConfirmation,
  cancelText = `<i class='mdi mdi-close me-2'></i>Cancel`,
  onCancel = null,
  modalSize = ``,
  showFooter = true,
  closeOnSave = true
) {
  // modal
  let modal = document.createElement(`div`);
  modal.className = `modal`;
  modal.setAttribute(`tabindex`, `-1`);
  modal.setAttribute(`data-bs-backdrop`, `static`);
  modal.id = `mdlMyModal`;

  // modal-dialog
  modal.appendChild(document.createElement(`div`));
  modal.firstElementChild.className = `modal-dialog ${modalSize}`;

  // modal-content
  modal.firstElementChild.appendChild(document.createElement(`div`));
  modal.firstElementChild.firstElementChild.className = `modal-content`;

  // modal-header
  modal.firstElementChild.firstElementChild.appendChild(
    document.createElement(`div`)
  );
  modal.firstElementChild.firstElementChild.children[0].className = `modal-header`;
  modal.firstElementChild.firstElementChild.children[0].id = `modal-header`;

  // modal-body
  modal.firstElementChild.firstElementChild.appendChild(
    document.createElement(`div`)
  );
  modal.firstElementChild.firstElementChild.children[1].className = `modal-body`;
  modal.firstElementChild.firstElementChild.children[1].id = `modal-body`;
  if (String(typeof body).toLowerCase() === `string`) {
    modal.firstElementChild.firstElementChild.children[1].innerHTML = body;
  } else {
    modal.firstElementChild.firstElementChild.children[1].appendChild(body);
  }

  // modal-title
  modal.firstElementChild.firstElementChild.children[0].appendChild(
    document.createElement(`h5`)
  );
  modal.firstElementChild.firstElementChild.children[0].children[0].className = `modal-title`;
  modal.firstElementChild.firstElementChild.children[0].children[0].id = `modal-title`;
  modal.firstElementChild.firstElementChild.children[0].children[0].innerHTML =
    subject;

  // btn-close
  modal.firstElementChild.firstElementChild.children[0].appendChild(
    document.createElement(`button`)
  );
  modal.firstElementChild.firstElementChild.children[0].children[1].className = `btn-close`;
  modal.firstElementChild.firstElementChild.children[0].children[1].type = `button`;
  modal.firstElementChild.firstElementChild.children[0].children[1].id = `mdlMyModal-CloseButton`;
  modal.firstElementChild.firstElementChild.children[0].children[1].setAttribute(
    `data-bs-dismiss`,
    `modal`
  );
  modal.firstElementChild.firstElementChild.children[0].children[1].setAttribute(
    `aria-label`,
    `Close`
  );

  if (showFooter === true) {
    // modal-footer
    modal.firstElementChild.firstElementChild.appendChild(
      document.createElement(`div`)
    );
    modal.firstElementChild.firstElementChild.children[2].className = `modal-footer`;
    modal.firstElementChild.firstElementChild.children[2].id = `modal-footer`;

    // btn-cancel
    if (cancelText !== false) {
      modal.firstElementChild.firstElementChild.children[2].appendChild(
        document.createElement(`button`)
      );
      modal.firstElementChild.firstElementChild.children[2].children[0].className = `btn btn-secondary`;
      modal.firstElementChild.firstElementChild.children[2].children[0].innerHTML =
        cancelText;
      modal.firstElementChild.firstElementChild.children[2].children[0].type = `button`;
      modal.firstElementChild.firstElementChild.children[2].children[0].id = `mdlMyModal-CancelButton`;
      modal.firstElementChild.firstElementChild.children[2].children[0].setAttribute(
        `data-bs-dismiss`,
        `modal`
      );
      modal.firstElementChild.firstElementChild.children[2].children[0].addEventListener(
        `click`,
        function () {
          if (typeof onCancel === `function`) {
            onCancel();
          }

          modal.firstElementChild.firstElementChild.children[0].children[1].click();
        }
      );
    }

    // btn-confirm
    modal.firstElementChild.firstElementChild.children[2].appendChild(
      document.createElement(`button`)
    );
    modal.firstElementChild.firstElementChild.children[2].lastElementChild.className = `btn btn-info text-white`;
    modal.firstElementChild.firstElementChild.children[2].lastElementChild.innerHTML =
      confirmText;
    modal.firstElementChild.firstElementChild.children[2].lastElementChild.type = `button`;
    modal.firstElementChild.firstElementChild.children[2].lastElementChild.id = `mdlMyModal-SaveButton`;
    modal.firstElementChild.firstElementChild.children[2].lastElementChild.addEventListener(
      `click`,
      function () {
        if (typeof onConfirmation === `function`) {
          onConfirmation();
        }

        if (closeOnSave === true) {
          modal.firstElementChild.firstElementChild.children[0].children[1].click();
        }
      }
    );
  }

  // Add to the body
  document.body.appendChild(modal);

  // Trigger the toast
  const myModal = new bootstrap.Modal(modal);
  myModal.show();

  modal.addEventListener("hidden.bs.modal", function () {
    this.remove();
    try {
      document.getElementsByTagName(`rte-floatpanel`)[0].outerHTML = ``;
    } catch (err) {}
  });
}

function IsDefined(val) {
  return val !== null && String(typeof val) !== `undefined` ? true : false;
}

function CreateElement(props) {
  // Create the element
  let element = document.createElement(props.Element || `div`);

  // Apply the standard attributes
  IsDefined(props?.ID) ? (element.id = props?.ID) : null;
  IsDefined(props?.Name) ? (element.name = props?.Name) : null;
  IsDefined(props?.ClassName) ? (element.className = props?.ClassName) : null;
  IsDefined(props?.InnerHTML) && String(typeof props.InnerHTML) === `string`
    ? (element.innerHTML = props.InnerHTML)
    : ``;
  IsDefined(props?.InnerHTML) &&
  String(typeof props.InnerHTML) === `object` &&
  !Array.isArray(props.InnerHTML)
    ? element.appendChild(props.InnerHTML)
    : ``;
  if (
    IsDefined(props?.InnerHTML) &&
    String(typeof props.InnerHTML) === `object` &&
    Array.isArray(props.InnerHTML)
  ) {
    for (let i = 0; i < props.InnerHTML.length; i++) {
      element.appendChild(props.InnerHTML[i]);
    }
  }

  // Apply optional attributes
  IsDefined(props?.For) ? element.setAttribute(`for`, props?.For) : null;
  IsDefined(props?.Href) ? (element.href = props?.Href) : null;
  IsDefined(props?.Rows) ? (element.rows = props?.Rows) : null;
  IsDefined(props?.Src) ? (element.src = props?.Src) : null;
  IsDefined(props?.PlaceHolder)
    ? (element.placeholder = props?.PlaceHolder)
    : null;
  IsDefined(props?.ReadOnly)
    ? element.setAttribute(`readOnly`, props?.ReadOnly)
    : null;
  IsDefined(props?.Target)
    ? element.setAttribute(`target`, props?.Target)
    : null;
  IsDefined(props?.Type) ? (element.type = props?.Type) : null;
  IsDefined(props?.Value) ? (element.value = props?.Value) : null;

  // Add tooltips if required
  if (IsDefined(props?.ToolTip) === true) {
    element.setAttribute(`data-bs-toggle`, `tooltip`);
    element.setAttribute(
      `data-bs-placement`,
      IsDefined(props?.ToolTipPosition)
        ? IsDefined(props?.ToolTipPosition)
        : `top`
    );
    element.setAttribute(`title`, props?.ToolTip);
  }

  // Add additional styling if required
  if (IsDefined(props.Styles) === true) {
    for (let s = 0; s < props.Styles.length; s++) {
      let style = Object.entries(props.Styles[s]);
      element.style[style[0][0]] = style[0][1];
    }
  }

  // Add additional attributes if required
  if (IsDefined(props.Attributes) === true) {
    for (let a = 0; a < props.Attributes.length; a++) {
      let attribute = Object.entries(props.Attributes[a]);
      element.setAttribute(attribute[0][0], attribute[0][1]);
    }
  }

  // Return the element
  return element;
}

function FormatNumber(DecimalValue, DecimalPlaces) {
  DecimalPlaces = isNaN(DecimalPlaces) ? 2 : DecimalPlaces;
  let decSeparator = `.`;
  let thouSeparator = `,`;
  var sign = DecimalValue < 0 ? `-` : ``,
    i =
      parseInt(
        (DecimalValue = Math.abs(+DecimalValue || 0).toFixed(DecimalPlaces))
      ) + ``,
    j = (j = i.length) > 3 ? j % 3 : 0;
  return (
    sign +
    (j ? i.slice(0, j) + thouSeparator : "") +
    i.slice(j).replace(/(\d{3})(?=\d)/g, "$1" + thouSeparator) +
    (DecimalPlaces
      ? decSeparator +
        Math.abs(DecimalValue - i)
          .toFixed(DecimalPlaces)
          .slice(2)
      : ``)
  );
}

function RoundNumber(num) {
  returnMath.round((num + Number.EPSILON) * 100) / 100;
}

function ReplaceAll(Haystack, Needle, NewNeedle) {
  while (Haystack.indexOf(Needle) >= 0) {
    Haystack = Haystack.replace(Needle, NewNeedle);
  }

  return Haystack;
}

String.prototype.ucWords = function () {
  str = this.toLowerCase();
  return str.replace(/(^([a-zA-Z\p{M}]))|([ -][a-zA-Z\p{M}])/g, function (s) {
    return s.toUpperCase();
  });
};

String.prototype.decode = function () {
  try {
    return decodeURIComponent(this);
  } catch (e) {
    console.log(e);
    return this;
  }
};

let getCitiesInteval = null;
function GetCities(caller) {
  window.clearInterval(getCitiesInteval);
  getCitiesInteval = window.setInterval(function () {
    window.clearInterval(getCitiesInteval);
    Router(
      JSON.stringify({
        RouteId: `106`,
        CityName: caller.value,
      }),
      function (data) {
        let container = $$(`${caller.id.replace(`txt-`, `div-`)}`);
        let hiddenField = $$(`${caller.id.replace(`-Text`, ``)}`);
        container.innerHTML = ``;

        for (let c = 0; c < data.length; c++) {
          let option = CreateElement({
            Element: `div`,
            ClassName: `p-3 border border-light cursor-pointer hoverable`,
            InnerHTML: `${data[c].CityName}, ${data[c].CountryName}`,
          });
          option.addEventListener(`click`, function () {
            container.classList.add(`d-none`);
            caller.value = `${data[c].CityName}, ${data[c].CountryName}`;
            hiddenField.value = data[c].CityId;
          });
          container.appendChild(option);
        }

        container.classList.remove(`d-none`);
      },
      function (e) {
        if (String(e).indexOf(`Failed to fetch`) >= 0) {
          setTimeout(function () {
            GetCities(CountryCode);
          }, 500);
        } else {
          Notify(`Error`, e, `danger`);
        }
      }
    );
  }, 500);
}
