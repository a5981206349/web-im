import React from 'react';
import {	
	BrowserRouter as Router,
	Route
} from 'react-router-dom';

import Register from './register'
import Login from './login';

import Main from './main';
import actions from '../redux/actions';
import {connect} from 'react-redux';
import './main.css';



//The Main router class
class AppRouter extends React.Component{
	constructor(props){
		super(props);
	}
	componentWillReceiveProps(nextProps){
		if(nextProps.location !== this.props.location)
			this.props.history.push(nextProps.location);
	}
	componentDidMount(){
		let checkUser = this.props.checkUser;
		window.addEventListener('popstate',()=>{
			
			if(location.pathname === '/assert/login'){
				checkUser({from:'main'},this.props.history);
			}
			if(location.pathname === '/assert/main'){
				checkUser({from:'login'},this.props.history);
			}
		});
		var svgSprite='<svg><symbol id="icon-file" viewBox="0 0 1024 1024"><path d="M960.64 256c0-52.928-43.072-96-96-96l-185.6 0c-0.8 0-1.472 0.416-2.272 0.448-3.424 0.224-6.848 0.704-10.08 2.048-0.448 0.192-0.8 0.576-1.248 0.8-3.168 1.472-6.272 3.136-8.928 5.696-16.576 16.032-25.088 47.904-34.528 87.936-1.312 5.536-2.4 10.336-3.52 14.496-1.44 5.76-4.064 16.48-27.264 16.48C588.416 287.904 578.624 288 576 288L160 288c-52.928 0-96 43.072-95.904 98.464L96 800c0 52.928 43.072 96 96 96l640 0c52.928 0 96-43.072 95.904-93.536M864 800c0 17.664-14.336 32-32 32L192 832c-17.632 0-32-14.336-32.096-34.464L128 384c0-17.632 14.368-32 32-32l416 0c2.784 0 12.576-0.096 15.2-0.096 45.92 0 79.328-24.352 89.216-64.512 1.056-4 2.368-9.472 3.872-15.808C686.72 261.216 692.288 237.632 697.056 224l167.584 0c17.664 0 32 14.368 32 32l0 2.272c0 0.128-0.064 0.224-0.064 0.352L864 800z"  ></path><path d="M128 224l416 0c17.696 0 32-14.336 32-32s-14.304-32-32-32L128 160C110.336 160 96 174.336 96 192S110.336 224 128 224z"  ></path></symbol><symbol id="icon-plus" viewBox="0 0 1024 1024"><path d="M185.89696 532.2752l286.72 0 0 286.72c0 11.32544 9.17504 20.48 20.48 20.48s20.48-9.15456 20.48-20.48l0-286.72 286.72 0c11.30496 0 20.48-9.15456 20.48-20.48s-9.17504-20.48-20.48-20.48l-286.72 0 0-286.72c0-11.32544-9.17504-20.48-20.48-20.48s-20.48 9.15456-20.48 20.48l0 286.72-286.72 0c-11.30496 0-20.48 9.15456-20.48 20.48S174.592 532.2752 185.89696 532.2752z"  ></path></symbol><symbol id="icon-video" viewBox="0 0 1024 1024"><path d="M960 192l-28.384 0c-16.8 0-32.928 6.624-44.928 18.432l-86.688 85.504 0-39.936c0-53.024-43.008-96-96-96l-608 0c-52.928 0-96 43.04-96 96l0 512c0 52.992 42.976 96 96 96l608 0c52.992 0 96-43.008 96-96l0-39.072 86.688 85.504c12 11.808 28.128 18.432 44.928 18.432l28.384 0c35.328 0 64-28.64 64-64l0-512.864c0-35.36-28.672-64-64-64zM96 800c-17.664 0-32-14.368-32-32l0-512c0-17.696 14.304-32 32-32l608 0c17.632 0 32 14.336 32 32l0 512c0 17.632-14.368 32-32 32l-608 0zM960 768.864l-32 0-128-128 0-0.864-32-32 0-192 160-160 32 0 0 512.864z"  ></path></symbol><symbol id="icon-voice" viewBox="0 0 1164 1024"><path d="M965.818182 0C985.111273 0 1000.727273 15.639273 1000.727273 34.909091c0 0 162.909091 151.272727 162.909091 477.090909s-162.909091 477.090909-162.909091 477.090909c0 19.293091-15.616 34.909091-34.909091 34.909091S930.909091 1008.384 930.909091 989.090909c0 0 162.909091-151.272727 162.909091-477.090909S930.909091 34.909091 930.909091 34.909091C930.909091 15.639273 946.525091 0 965.818182 0z"  ></path><path d="M640 279.272727c19.293091 0 34.909091 15.639273 34.909091 34.909091 0 0 69.818182 46.545455 69.818182 197.818182s-69.818182 197.818182-69.818182 197.818182c0 19.269818-15.616 34.909091-34.909091 34.909091S605.090909 729.088 605.090909 709.818182c0 0 69.818182-46.545455 69.818182-197.818182s-69.818182-197.818182-69.818182-197.818182C605.090909 294.912 620.706909 279.272727 640 279.272727z"  ></path><path d="M802.909091 139.636364C822.202182 139.636364 837.818182 155.275636 837.818182 174.545455c0 0 116.363636 104.727273 116.363636 337.454545s-116.363636 337.454545-116.363636 337.454545c0 19.293091-15.616 34.909091-34.909091 34.909091S768 868.747636 768 849.454545c0 0 116.363636-104.727273 116.363636-337.454545S768 174.545455 768 174.545455C768 155.275636 783.616 139.636364 802.909091 139.636364z"  ></path><path d="M209.454545 674.909091 0 674.909091 0 372.363636l209.454545 0 279.272727-209.454545 0 721.454545L209.454545 674.909091zM442.181818 256l-209.454545 162.909091L46.545455 418.909091l0 209.454545 186.181818 0 209.454545 162.909091L442.181818 256z"  ></path><path d="M965.818182 0C985.111273 0 1000.727273 15.639273 1000.727273 34.909091c0 0 162.909091 151.272727 162.909091 477.090909s-162.909091 477.090909-162.909091 477.090909c0 19.293091-15.616 34.909091-34.909091 34.909091S930.909091 1008.384 930.909091 989.090909c0 0 162.909091-151.272727 162.909091-477.090909S930.909091 34.909091 930.909091 34.909091C930.909091 15.639273 946.525091 0 965.818182 0z"  ></path></symbol><symbol id="icon-bell" viewBox="0 0 1024 1024"><path d="M915.130182 946.385455 102.656 946.385455c-8.308364 0-16.011636-4.421818-20.154182-11.659636-4.165818-7.214545-4.142545-16.058182 0.023273-23.272727L173.149091 754.967273 173.149091 413.579636c0-159.115636 113.966545-296.936727 268.241455-328.564364L441.390545 75.822545c0-38.679273 31.464727-70.144 70.120727-70.144s70.120727 31.464727 70.120727 70.144L581.632 86.109091c153.576727 33.675636 263.028364 168.354909 263.028364 327.470545l0 341.410909 90.624 156.462545c4.189091 7.214545 4.189091 16.058182 0.023273 23.272727C931.141818 941.963636 923.461818 946.385455 915.130182 946.385455zM143.034182 899.84l731.717818 0-75.776-130.839273c-3.863273-6.679273-4.165818-14.801455-0.861091-21.690182l0-333.730909c0-142.801455-102.353455-262.749091-243.409455-285.230545-11.287273-1.792-19.618909-11.543273-19.618909-22.970182l0-29.556364c0-13.009455-10.565818-23.598545-23.575273-23.598545-13.009455 0-23.575273 10.589091-23.575273 23.598545l0 28.741818c0 11.589818-8.517818 21.410909-19.991273 23.04C326.4 147.735273 219.694545 270.661818 219.694545 413.579636l0 336.314182c2.397091 6.283636 2.513455 13.242182-0.884364 19.106909L143.034182 899.84z"  ></path><path d="M506.205091 1018.298182c-38.656 0-70.120727-31.464727-70.120727-70.144 0-12.869818 10.426182-23.272727 23.272727-23.272727s23.272727 10.402909 23.272727 23.272727c0 13.009455 10.565818 23.598545 23.575273 23.598545 13.009455 0 23.598545-10.589091 23.598545-23.598545 0-12.869818 10.402909-23.272727 23.272727-23.272727s23.272727 10.402909 23.272727 23.272727C576.349091 986.833455 544.884364 1018.298182 506.205091 1018.298182z"  ></path></symbol><symbol id="icon-more" viewBox="0 0 1024 1024"><path d="M849.427 1000.999h-157.9c-73.785 0-132.809-59.029-132.809-132.809v-258.243c0-14.759 10.33-26.562 25.088-29.513 4.427-1.472 8.853-2.953 13.278-2.953h252.337c73.785 0 132.809 59.029 132.809 132.809v157.9c-1.472 72.309-60.5 132.809-132.809 132.809zM616.268 636.505v231.684c0 39.844 32.468 73.785 73.785 73.785h157.9c39.844 0 73.785-32.468 73.785-73.785v-157.9c0-39.844-32.468-73.785-73.785-73.785h-231.684z"  ></path><path d="M315.23 1000.999h-147.571c-76.736 0-137.241-61.981-137.241-137.241v-147.571c0-76.736 61.981-137.241 137.241-137.241h247.911c4.427 0 8.853 1.472 13.278 2.953 14.759 1.472 25.088 14.759 25.088 29.513v253.814c0 73.785-61.981 135.764-138.711 135.764zM167.657 636.505c-42.796 0-78.211 35.418-78.211 78.211v147.571c0 44.269 35.418 78.211 78.211 78.211h147.571c42.796 0 78.211-35.418 78.211-78.211v-225.779h-225.779z"  ></path><path d="M415.576 471.232h-255.291c-72.309 0-129.859-57.549-129.859-129.859v-163.801c0-72.309 57.549-129.859 129.859-129.859h163.801c72.309 0 129.859 57.549 129.859 129.859v261.199c0 14.759-10.33 26.562-25.088 29.513-4.427 1.472-8.853 2.953-13.278 2.953zM158.805 105.259c-38.369 0-70.836 32.468-70.836 70.836v165.279c0 38.369 32.468 70.836 70.836 70.836h234.634v-234.634c0-38.369-32.468-70.836-70.836-70.836h-163.801z"  ></path><path d="M847.948 471.232h-252.337c-4.427 0-8.853-1.472-13.278-2.953-14.759-1.472-25.088-14.759-25.088-29.513v-258.243c0-73.785 60.5-134.287 134.287-134.287h156.423c73.785 0 134.287 60.5 134.287 134.287v156.423c-1.472 73.785-60.5 134.287-134.287 134.287zM616.268 412.199h230.207c41.318 0 75.263-33.941 75.263-75.263v-156.423c0-41.318-33.941-75.263-75.263-75.263h-156.423c-41.318 0-75.263 33.941-75.263 75.263v231.684z"  ></path></symbol><symbol id="icon-people" viewBox="0 0 1029 1024"><path d="M804.08 612.936c15.12 7.56 22.68 20.424 22.68 38.56l0 146.296 0 26.096c0 11.328-3.4 21.16-10.2 29.48-6.808 8.312-15.504 12.488-26.088 12.488L233.616 865.856c-9.832 0-18.152-4.168-24.952-12.488-6.808-8.32-10.208-18.152-10.208-29.48l0-26.096L198.456 651.504c0-18.144 7.56-31 22.688-38.56l156.504-72.584L438.888 512c-28.728-17.392-50.656-42.336-65.776-74.848-14.368-28.736-21.552-59.352-21.552-91.864 0-9.832 0.752-19.28 2.272-28.352s3.4-17.768 5.672-26.088c10.584-38.552 29.672-70.312 57.272-95.264 27.592-24.944 59.536-37.424 95.832-37.424 37.048 0 69.568 12.848 97.536 38.552 27.976 25.712 46.88 58.216 56.704 97.536 3.792 18.896 5.68 35.912 5.68 51.032 0 30.24-6.056 59.36-18.144 87.328-15.128 34.024-37.056 59.736-65.784 77.12l64.64 30.624L804.08 612.936 804.08 612.936zM198.456 565.304c-16.632 7.552-29.672 19.096-39.128 34.584-9.448 15.504-14.176 32.704-14.176 51.608l0 146.296L28.336 797.792c-8.32 0-15.128-3.2-20.416-9.64-5.296-6.424-7.944-14.544-7.944-24.376L-0.024 625.416c0-16.64 6.048-27.224 18.144-31.76L193.92 512c-21.168-12.848-38.176-31.184-51.032-55.008-12.848-23.816-19.28-50.472-19.28-79.952 0-20.416 3.4-39.88 10.208-58.408 6.808-18.52 16.072-34.592 27.784-48.2 11.72-13.608 25.328-24.384 40.832-32.32 15.496-7.936 32.32-11.904 50.472-11.904 12.096 0 23.44 1.888 34.024 5.664 10.584 3.784 20.792 8.696 30.616 14.752-12.848 31.752-19.28 64.64-19.28 98.664 0 26.472 3.784 51.984 11.344 76.552 7.56 24.568 18.144 46.688 31.752 66.344-8.312 9.08-17.008 16.256-26.08 21.544L198.456 565.304zM1010.48 593.656c12.096 6.048 18.152 16.64 18.152 31.76l0 138.368c0 9.832-2.648 17.952-7.936 24.376-5.296 6.44-12.104 9.64-20.424 9.64l-120.208 0L880.064 651.504c0-18.904-4.736-36.112-14.176-51.608-9.456-15.504-22.12-27.032-37.992-34.592L715.616 512c-10.584-6.048-20.8-14.744-30.624-26.088 12.856-19.656 22.872-41.4 30.056-65.208 7.184-23.824 10.776-48.952 10.776-75.424 0-17.384-1.504-34.024-4.528-49.896-3.032-15.872-7.56-31.376-13.608-46.496 9.832-6.808 20.408-12.288 31.76-16.448 11.336-4.16 23.056-6.232 35.16-6.232 18.152 0 35.16 3.968 51.032 11.904 15.88 7.936 29.68 18.712 41.4 32.32s20.976 29.68 27.784 48.2c6.816 18.52 10.208 37.992 10.208 58.408 0 28.728-6.432 55-19.28 78.824s-29.112 42.16-48.768 55.008L1010.48 593.656 1010.48 593.656z"  ></path></symbol><symbol id="icon-chat" viewBox="0 0 1024 1024"><path d="M936.204421 473.434659c0 202.330148-189.920514 366.357945-424.204421 366.357945-40.033785 0-78.766948-4.78191-115.502617-13.726629 0 0-73.40073 91.390453-193.008852 90.855264 57.864896-82.089623 57.770751-147.948587 57.770751-147.948587-105.185644-66.677609-173.46268-174.21481-173.46268-295.53697 0-202.330148 189.901071-366.357945 424.204421-366.357945C746.283908 107.076714 936.204421 271.104511 936.204421 473.434659z"  ></path></symbol><symbol id="icon-chat1" viewBox="0 0 1024 1024"><path d="M453.376 147.5584c-220.7744 0-399.744 161.0496-399.744 359.7312 0 121.9584 67.4304 229.7344 170.5728 294.784l-0.0768 174.336 153.5232-115.84c24.5248 4.224 49.8432 6.4512 75.7248 6.4512 220.7488 0 399.7184-161.024 399.7184-359.7312C853.0944 308.608 674.1248 147.5584 453.376 147.5584L453.376 147.5584zM273.4848 881.3824l0.4864-97.2032c-107.6992-55.2448-180.3776-158.4384-180.3776-276.9152 0-176.5888 161.0752-319.744 359.7824-319.744 198.656 0 359.7312 143.1552 359.7312 319.744 0 176.6144-161.1008 319.744-359.7312 319.744-30.8224 0-60.5952-3.7888-89.1392-10.2656L273.4848 881.3824 273.4848 881.3824zM573.2608 47.616c-93.2608 0-179.072 28.7488-247.0656 76.9536 38.5536-10.5728 79.36-16.4608 121.5744-16.9472 39.0656-12.928 81.3568-20.0192 125.4912-20.0192 198.7072 0 359.7568 143.1808 359.7568 319.7696 0 55.4496-15.8976 107.6224-43.8272 153.088-4.9152 33.6384-14.4384 65.9456-27.9808 96.4096 69.2224-64.6912 111.7952-152.6272 111.7952-249.5232C973.0048 208.6656 794.0352 47.616 573.2608 47.616L573.2608 47.616zM573.2608 47.616"  ></path></symbol><symbol id="icon-voice1" viewBox="0 0 1024 1024"><path d="M451.131077 1024C434.333538 1024 420.706462 1010.766769 420.706462 994.461538 420.706462 978.136615 434.333538 964.923077 451.131077 964.923077L472.615385 964.923077 472.615385 905.846154C322.363077 892.691692 204.091077 771.899077 177.230769 630.153846L236.307692 630.153846C264.014769 748.504615 381.676308 846.769231 512 846.769231 642.323692 846.769231 759.985231 748.504615 787.692308 630.153846L846.769231 630.153846C819.908923 771.899077 701.636923 892.691692 551.384615 905.846154L551.384615 964.923077 572.868923 964.923077C589.666462 964.923077 603.293538 978.136615 603.293538 994.461538 603.293538 1010.766769 589.666462 1024 572.868923 1024L451.131077 1024ZM512 787.692308C394.338462 787.692308 295.384615 685.272615 295.384615 571.076923L295.384615 196.923077C295.384615 82.727385 394.338462 0 512 0 629.661538 0 728.615385 82.727385 728.615385 196.923077L728.615385 571.076923C728.615385 685.272615 629.661538 787.692308 512 787.692308ZM669.538462 196.923077C669.538462 115.357538 596.046769 59.076923 512 59.076923 427.953231 59.076923 354.461538 115.357538 354.461538 196.923077L354.461538 571.076923C354.461538 652.642462 427.953231 728.615385 512 728.615385 596.046769 728.615385 669.538462 652.642462 669.538462 571.076923L669.538462 196.923077Z"  ></path></symbol><symbol id="icon-man" viewBox="0 0 1024 1024"><path d="M736.761532 280.671401c0-119.791294-101.33699-216.869283-226.324632-216.869283-125.011178 0-226.348168 97.077989-226.348168 216.869283 0 4.859681 0 23.89113 0 28.750811 0 3.415796 0 17.057491 0 20.594037 0 124.795261 101.33699 310.170249 226.348168 310.170249 124.987642 0 226.324632-185.374988 226.324632-310.170249 0-3.536546 0-17.178241 0-20.594037C736.761532 304.561507 736.761532 285.531082 736.761532 280.671401z"  ></path><path d="M890.211413 747.441267c-63.324234-55.888891-192.185091-114.977661-215.594243-125.492132-0.240477 0.240477-0.481977 0.456395-0.722454 0.697895 0.216941 5.821589 0.530073 11.620665 0.530073 17.563004 0 120.584356-45.712111 222.907813-109.396549 260.968663l-23.697725-122.147968 24.636097-28.485775-54.277184-49.272193-54.278207 49.272193 24.63712 28.485775-23.987321 123.543757c-64.863287-36.931121-111.658056-140.337235-111.658056-262.365476 0-5.869684 0.313132-11.619642 0.529049-17.417695-28.028357 12.654204-152.077627 70.203922-213.764572 124.649951-69.795623 61.591777-70.830185 212.527394-70.830185 212.527394l346.45157 0 205.801203 0 346.452593 0C961.040574 959.968661 960.007035 809.034067 890.211413 747.441267z"  ></path></symbol><symbol id="icon-female" viewBox="0 0 1024 1024"><path d="M858.4 800.8c-58.4-26-171.6-54.8-171.6-54.8s1.2-34.8 0-70c190 2.8 202-19.6 214-25.6-55.2-88.4-62.8-263.2-64.4-281.2-14.8-131.6-50.8-187.2-62.8-206.4C594-63.2 425.2 76 425.2 76 308 71.6 277.2 180.4 272.8 191.6c-20 58.4-33.6 167.2-37.2 180.8-26.8 210.8-84 277.2-88.8 286 70.8 26 231.2 16.8 231.2 16.8s1.2 44.8 1.2 72c-86.4 12.4-210.8 72.8-223.2 80.8C66.4 886 83.2 1024 83.2 1024s865.2 0 900 0C1007.6 854.4 868.8 805.2 858.4 800.8L858.4 800.8zM578 694c-4.4 1.2-44.4 21.2-89.6 0-4.4-1.2-89.6-35.2-134.8-170-4-2.4-26.8-7.2-44.8-26.8-2.4-2.8-68-65.6 17.2-100 5.6-2.8 69.6-30.8 100-143.2 4-4.4 3.6-6.4 11.6-9.2 0 0 36.8 105.6 139.2 116.8 1.6-11.2-12.8 0.8-4.4-72 4.4 2.8 56.8 91.2 121.2 98.8 10.4 2.4 38.8 17.2 64.4 18 6.8 0.8 50 22.4 7.6 80.8-2.4 4.4-16.4 24.4-54 36.4C709.2 527.6 671.6 655.6 578 694L578 694z"  ></path></symbol><symbol id="icon-search" viewBox="0 0 1030 1024"><path d="M738.618409 646.405992c96.606263 96.606263 192.944918 192.944918 290.889218 290.621611-31.310063 29.169204-62.352519 57.803193-93.662582 86.972397-93.662582-93.662582-190.001237-190.001237-286.875107-286.875107-104.099269 71.451169-215.691545 95.535833-336.917687 66.901844-96.87387-22.746627-175.015224-75.732887-233.621239-156.282708-120.690927-165.648966-98.747122-390.439162 42.81718-530.130212 149.860131-147.719272 377.861615-153.339027 534.947145-33.450922C814.08369 205.389036 876.436208 448.644141 738.618409 646.405992zM728.984544 407.700212C728.984544 230.008915 585.814598 86.036146 408.658514 86.036146 231.502431 86.036146 86.994448 230.276522 86.994448 407.164998c0 178.226513 143.972768 322.466888 321.664066 321.664066C587.152634 728.293849 728.984544 585.926725 728.984544 407.700212z"  ></path></symbol><symbol id="icon-smile" viewBox="0 0 1024 1024"><path d="M511 954.86c-119.3 0-231.4-46.1-315.8-129.9-84.3-83.8-130.8-195.3-130.8-313.8 0-118.5 46.5-230 130.8-313.8 84.3-83.8 196.5-129.9 315.8-129.9 119.3 0 231.5 46.1 315.8 129.9 174.1 173.1 174.1 454.6 0 627.6C742.5 908.66 630.3 954.86 511 954.86L511 954.86 511 954.86 511 954.86 511 954.86zM511.1 125.26c-103.8 0-201.3 40.1-274.6 113-73.4 72.9-113.8 169.8-113.8 272.9 0 103.1 40.4 200.1 113.7 272.9 73.3 72.8 170.9 113 274.6 113 103.8 0 201.4-40.2 274.8-113.1 151.4-150.4 151.4-395.3 0-545.8C712.4 165.36 614.8 125.26 511.1 125.26L511.1 125.26 511.1 125.26 511.1 125.26 511.1 125.26zM352.4 632.26c0 0 52.3 83.1 158.6 83.1 106.3 0 176-83.1 176-83.1s39.5-0.1 39.5 41.5c0 0-68.5 97-215.5 97s-194.8-97-194.8-97S314.7 632.26 352.4 632.26L352.4 632.26 352.4 632.26 352.4 632.26zM381.2 368.46c-30.1 0-54.7 24.3-54.7 54.3 0 30 24.6 54.3 54.7 54.3 30.3 0 54.7-24.3 54.7-54.3C435.9 392.76 411.5 368.46 381.2 368.46L381.2 368.46 381.2 368.46 381.2 368.46 381.2 368.46zM661.4 368.46c-30.2 0-54.7 24.3-54.7 54.3 0 30 24.5 54.3 54.7 54.3 30.2 0 54.7-24.3 54.7-54.3C716.1 392.76 691.7 368.46 661.4 368.46L661.4 368.46 661.4 368.46 661.4 368.46 661.4 368.46z"  ></path></symbol><symbol id="icon-shutdown" viewBox="0 0 1024 1024"><path d="M844.131 383.675c-16.741-43.55-41.231-82.821-72.792-116.722-32.754-35.182-71.647-62.931-115.599-82.475-16.147-7.179-35.062 0.088-42.241 16.238-7.181 16.148 0.089 35.061 16.237 42.241 71.354 31.729 126.278 89.859 154.655 163.682 28.378 73.822 26.531 153.774-5.197 225.128C730.443 741.4 622.533 806.633 509.635 806.625c-39.921-0.003-80.484-8.163-119.251-25.401-148.4-65.99-215.446-240.409-149.457-388.81 31.503-70.846 91.079-127.434 163.451-155.254 16.496-6.341 24.729-24.854 18.387-41.351-6.341-16.497-24.855-24.728-41.351-18.388-44.157 16.974-83.95 42.111-118.272 74.712-34.323 32.602-61.473 71.05-80.694 114.276-19.544 43.952-29.836 90.607-30.591 138.669-0.728 46.312 7.392 91.875 24.133 135.426 16.741 43.55 41.231 82.821 72.792 116.722 32.754 35.183 71.646 62.931 115.598 82.475s90.606 29.837 138.669 30.591c1.905 0.03 3.806 0.045 5.708 0.045 44.346 0 87.959-8.126 129.718-24.178 43.551-16.74 82.821-41.231 116.723-72.791 35.183-32.754 62.931-71.647 82.475-115.599s29.837-90.606 30.591-138.669c0.727-46.31-7.393-91.874-24.133-135.425z" fill="" ></path><path d="M510.061 539c17.673 0 32-14.327 32-32V135c0-17.673-14.327-32-32-32-17.673 0-32 14.327-32 32v372c0 17.673 14.326 32 32 32z" fill="" ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)
	}
	render(){
		return (
			<div className = "div-100">
				<Route path = "/login" component = {Login} />
				<Route className = "div-100" path = "/main" component = {Main} />
				<Route history = {this.props.history} path = "/register" component = {Register} />
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) =>{
	return {
		checkUser: (info,history) => dispatch(actions.checkUser(info,history))
	}
}

const mapStateToPropsRouter = (state) => {
	return {
		location:state.loginReducer.location
	}
}

AppRouter = connect(mapStateToPropsRouter,mapDispatchToProps)(AppRouter);




//The parent of Router
class App extends React.Component{
	constructor(props){
		super(props);
	}
	componentWillMount(){
		this.props.checkUser();
	}
	render(){
		return (
			<Router basename = "/assert">
				<Route path = "/" component = {AppRouter} />
			</Router>
		)
	}
}


export default connect(null,mapDispatchToProps)(App);