import { COLLECTION_FIREBASE, CONSTANTS, REGEX } from "./constans";
import { URLS } from "./urls";
import { API } from "./https-common";
import {
	handleGetMessageError,
	handleGetIsShowMessageError,
} from "./handle-error";
import { authRouter, restrictRoute } from "./authRouter";
import { readFileXLSX, exportXLSX, exportAOA } from "./readFile";
import jwtDecode from "jwt-decode";
import moment from "moment";
//import { enc,lib, AES, mode } from 'crypto-js';

const auth = () => {
	const token = window.localStorage.getItem(CONSTANTS.TOKEN);
	if (token) {
		const decodedJwt = jwtDecode(token);
		return decodedJwt;
	}
	return null;
};
const encryptedUrl = (url) => {
	// // Convert the secret key to a CryptoJS object
	// const key = enc.Utf8.parse(CONSTANTS.SECRETKEY);
	// // Generate a random initialization vector (IV)
	// const iv = lib.WordArray.random(16);
	// // Encrypt the plaintext with AES-CBC and the secret key
	// const ciphertext = AES.encrypt(url, key, {
	// 	iv: iv,
	// 	mode: mode.CBC,
	// });
	// // Combine the IV and ciphertext into a single string
	// const encryptedUrl = iv.concat(ciphertext.ciphertext).toString(enc.Base64);
	// return `${process.env.VUE_APP_URL_APP}${encryptedUrl}`;
	return `${process.env.VUE_APP_URL_APP}${url}`;
};

function imageSize(url) {
	const img = document.createElement("img");
	const promise = new Promise((resolve, reject) => {
		img.onload = () => {
			// Natural size is the actual image size regardless of rendering.
			// The 'normal' `width`/`height` are for the **rendered** size.
			const width = img.naturalWidth;
			const height = img.naturalHeight;
			// Resolve promise with the width and height
			resolve({ width, height });
		};
		// Reject promise on error
		img.onerror = reject;
	});
	// Setting the source makes it start downloading and eventually call `onload`
	img.src = url;

	return promise;
}
function getSizeFile(_size, withUnit = true) {
	const fSExt = new Array("Bytes", "KB", "MB", "GB", "TB");
	let i = 0;
	while (_size > 900) {
		_size /= 1024;
		i++;
	}
	const result = Math.round(_size * 100) / 100;
	return withUnit ? result + " " + fSExt[i] : result;
}

function convertByteToGB(size, fixed = 2) {
	const GB = size / 1024 / 1024 / 1024;
	return parseFloat(GB).toFixed(fixed) + " " + "GB";
}
// function getTimes(date) {
//   const start = moment().isSame(moment(date), "d") ? moment().hours() : 1;
//   const length = 10;
//   let startMin = start * 60;
//   let endMin = 24 * 60;
//   let times = [];

//   while (startMin <= endMin) {
//     let mins = startMin % 60;
//     let hours = Math.floor(startMin / 60);
//     const hoursString = hours < 10 ? `0${hours}` : hours == 24 ? "00" : hours;
//     let timeString = hoursString + ":" + mins.toString().padStart(2, "0");
//     if (hours == start && mins > moment().minutes()) {
//       times.push(timeString);
//     } else if (hours > start) {
//       times.push(timeString);
//     }
//     startMin += length;
//   }

//   return times;
// }
function getTimes() {
	const start = 0;
	const end = 24;
	const length = 10;
	let startMin = start * 60;
	let endMin = end * 60;
	let times = [];

	while (startMin <= endMin) {
		let mins = startMin % 60;
		let hours = Math.floor(startMin / 60);
		const hoursString = hours < 10 ? `0${hours}` : hours;
		let timeString = hoursString + ":" + mins.toString().padStart(2, "0");
		if (timeString != "24:00") {
			if (hours == start) {
				times.push(timeString);
			} else if (hours > start) {
				times.push(timeString);
			}
		}
		startMin += length;
	}
	return times;
}
function getTimeItems(formDate) {
  const items = [];
  const today = new Date();
  const reservDate = moment(formDate ?? today).isSame(
    today,
    "d"
  )
    ? today
    : formDate;

  const check = moment(reservDate).isAfter(today);

  const start = check
    ? moment(today).hour(0).minute(0)
    : moment(reservDate);
  const end = moment(start.clone()).hour(23).minute(50);
  const clone = start.clone().minute(0);

  while (clone.isSameOrBefore(end)) {
    if (clone.isAfter(start)) {
      items.push(clone.clone().format("HH:mm"));
    }
    clone.add(10, "m");
  }

  if (check) {
    items.unshift("00:00");
  }

  return items;
}
function formatDate(date) {
	if (!date) return null;
	return moment(date).format("YYYY/MM/DD");
}
function scrollToTop() {
	window.scrollTo(0, 0);
}
function getStatusTime(status, date, time) {
	return status != CONSTANTS.PERIOD_STATUS.PRIVATE && date && time
		? `${date} ${time}`
		: null;
}
function validatePublicTimeDate(
	status,
	specify_the_end,
	start_date,
	start_time,
	end_date,
	end_time
) {
	const startDateTime = moment(
		`${start_date} ${start_time}`,
		"YYYY/MM/DD HH:mm"
	);
	const endDateTime = moment(`${end_date} ${end_time}`, "YYYY/MM/DD HH:mm");
	return (
		(status == CONSTANTS.PERIOD_STATUS.PUBLICATION_TIME &&
			start_date &&
			start_time &&
			!moment().isBefore(startDateTime)) ||
		(end_date &&
			end_time &&
			specify_the_end &&
			!startDateTime.isBefore(endDateTime))
	);
}

const checkHours = (end_time, start_time, start_date, end_date) => {
	const converntTimeEnd = end_time ? end_time.split(":") : "";
	const converntTimeStart = start_time ? start_time.split(":") : "";
	const convertDDMMYYYYEnd = moment(end_date).valueOf();
	const timeEnd = moment()
		.set({
			hours: converntTimeEnd[0],
			minute: converntTimeEnd[1],
		})
		.valueOf();
	const convertDDMMYYYYStart = moment(start_date).valueOf();

	const timeStart = moment()
		.set({
			hours: converntTimeStart[0],
			minute: converntTimeStart[1],
		})
		.valueOf();
	const totalTimeStart = convertDDMMYYYYStart + timeStart;
	const totalTimeEnd = convertDDMMYYYYEnd + timeEnd;
	if (convertDDMMYYYYEnd < convertDDMMYYYYStart) {
		return true;
	} else if (convertDDMMYYYYEnd === convertDDMMYYYYStart) {
		if (totalTimeStart > totalTimeEnd) {
			return true;
		}
	}
	return false;
};

function compareObjects(one, two) {
	return JSON.stringify(one) === JSON.stringify(two);
}
export {
	COLLECTION_FIREBASE,
	URLS,
	API,
	CONSTANTS,
	REGEX,
	handleGetMessageError,
	handleGetIsShowMessageError,
	authRouter,
	restrictRoute,
	auth,
	readFileXLSX,
	exportXLSX,
	imageSize,
	getSizeFile,
	getTimes,
	getTimeItems,
	formatDate,
	exportAOA,
	scrollToTop,
	validatePublicTimeDate,
	compareObjects,
	getStatusTime,
	convertByteToGB,
	checkHours,
	// ToanDP 21/03/2023 ADD --->>
	encryptedUrl, 
	// ToanDP 21/03/2023 ADD <<---
};
