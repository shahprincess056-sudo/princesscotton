(function() {
    class SmibUtils {
        static getCurrentShopifyPageType() {
            if (window.hasOwnProperty('ShopifyAnalytics') && window.ShopifyAnalytics.hasOwnProperty('meta') && window.ShopifyAnalytics.meta.hasOwnProperty('page') && window.ShopifyAnalytics.meta.page.hasOwnProperty('pageType') && window.ShopifyAnalytics.meta.page.pageType !== undefined) {
                return ShopifyAnalytics.meta.page.pageType;
            }
            else {
                return null;
            }
        }

        static isLocalStorageAvailable() {
            let test = 'test';
            try {
                localStorage.setItem(test, test);
                localStorage.removeItem(test);
                return true;
            } catch(e) {
                return false;
            }
        }

        static startSocialBarAnimation1() {
            const smibContainer = document.getElementById('ea-smib-container');
            smibContainer.classList.add('smib-bar-animation-1');
            setTimeout(() => {
                smibContainer.classList.remove('smib-bar-animation-1');
                setTimeout(SmibUtils.startSocialBarAnimation1, 3500);
            }, 3500);
        }

        static addCSSToPage(cssToAdd) {
            let styleSheet = document.createElement("style");
            styleSheet.innerHTML = cssToAdd;
            document.head.appendChild(styleSheet);
        }

        static appendHTMLToBody(htmlToAdd) {
            document.body.insertAdjacentHTML('afterbegin', htmlToAdd);
        }

        static setLsWithExpiry(key, value, ttl) {
            if (SmibUtils.isLocalStorageAvailable() === false) {
                return;
            }

            value = value.toString();
            const now = new Date();
            const item = {
                value: value,
                expiry: now.getTime() + ttl,
            };
            localStorage.setItem(key, JSON.stringify(item));
        }

        static getLsWithExpiry(key) {
            if (SmibUtils.isLocalStorageAvailable() === false) {
                return null;
            }

            const itemStr = localStorage.getItem(key);
            if (!itemStr) {
                return null
            }

            const item = JSON.parse(itemStr);
            const now = new Date();
            if (now.getTime() > item.expiry) {
                localStorage.removeItem(key);
                return null
            }

            return item.value.toString();
        }

        static sendXHR(type, url, data, callback=null) {
            let newXHR = new XMLHttpRequest() || new window.ActiveXObject("Microsoft.XMLHTTP");
            newXHR.open(type, url, true);
            newXHR.send(data);
            newXHR.onreadystatechange = function() {
                if (this.status === 200 && this.readyState === 4) {
                    if (callback !== null) {
                        callback(this.response);
                    }
                }
            };
        }
    }

    class SocialBar {
        constructor(settings) {
            this._settings = settings;
            this._socialMedias = JSON.parse(settings['social_medias']);
        }

        reportImpression() {
            SmibUtils.sendXHR("GET", "https://app.getsocialbar.com/ri/2e585eea205411f1854e6ebe6f7ce57b.js", null, null);
        }

        reportSocialMediaClick(socialMediaType) {
            SmibUtils.sendXHR("GET", `https://app.getsocialbar.com/rsmc/2e585eea205411f1854e6ebe6f7ce57b//${socialMediaType}.js`, null, null);
        }

        toggle() {
            const currentState = SmibUtils.getLsWithExpiry('eaSmibToggleState');
            const selector = this._settings['bar_t_b_position'] === 'top' ? '#ea-smib-container a:not(:last-child)' : '#ea-smib-container a:not(:first-child)';
            if (currentState === null || currentState === 'opened') {
                document.getElementById('ea-smib-container').setAttribute('style', 'animation: collapseAnimation 0.5s linear forwards;');
                for (let element of document.querySelectorAll(selector)) {
                    element.style.transform = this._settings['bar_l_r_position'] === 'left' ? 'translateX(-100%)' : 'translateX(100%)';
                }

                document.getElementById('ea-smib-toggle-arrow').setAttribute('src', this._settings['bar_l_r_position'] === 'left' ? `https://app.getsocialbar.com/static/right_arrow.svg?color=${this._settings['bar_minimization_color']}` : `https://app.getsocialbar.com/static/left_arrow.svg?color=${this._settings['bar_minimization_color']}`);
                SmibUtils.setLsWithExpiry('eaSmibToggleState', 'closed', 604800000);
            }
            else if (currentState === 'closed') {
                document.getElementById('ea-smib-container').setAttribute('style', 'animation: expandAnimation 0.5s linear forwards;');
                for (let element of document.querySelectorAll(selector)) {
                    element.style.transform = 'translateX(0)';
                }

                document.getElementById('ea-smib-toggle-arrow').setAttribute('src', `https://app.getsocialbar.com/static/${this._settings['bar_l_r_position']}_arrow.svg?color=${this._settings['bar_minimization_color']}`);
                SmibUtils.setLsWithExpiry('eaSmibToggleState', 'opened', 604800000);
                setTimeout(function() {
                    document.getElementById('ea-smib-container').removeAttribute('style');
                }, 510);
            }
        }

        runLogic() {
            const currentState = this._settings['bar_minimization'] === 2 ? SmibUtils.getLsWithExpiry('eaSmibToggleState') : null;
            const currentPageType = SmibUtils.getCurrentShopifyPageType();
            if (this._settings['bar_location'] === 2) {
                if (currentPageType !== null) {
                    if (currentPageType !== "home") {
                        return;
                    }
                }
                else if (window.location.pathname !== "/" && window.location.pathname !== "" && window.location.pathname.length !== 3) {
                   return;
                }
            }

            const horizontalPadding = currentState === 'closed' ? "0" : this._settings['bar_h_padding'];
            SmibUtils.addCSSToPage(`@keyframes expandAnimation { 0% { ${this._settings['bar_l_r_position']}: 0%; } 100% { ${this._settings['bar_l_r_position']}: ${this._settings['bar_h_padding']}%; } } @keyframes collapseAnimation { 0% { ${this._settings['bar_l_r_position']}: ${this._settings['bar_h_padding']}%; } 100% { ${this._settings['bar_l_r_position']}: 0%; } } .effectiveAppsSocialMediaIconsBar{ transition: transform 0.5s ease-in-out; ${this._settings['bar_l_r_position']}:${horizontalPadding}%;position:fixed;${this._settings['bar_t_b_position']}: ${this._settings['bar_v_padding']}%;z-index:100000}.effectiveAppsSocialMediaIconsBar a{transition: transform 0.5s ease-in-out; display:block; text-align:center; display: flex; justify-content:center; align-items: center; height: ${this._settings['bar_size']}px;width: ${this._settings['bar_size']}px; text-decoration: none; }.effectiveAppsSocialMediaIconsBar a:hover{opacity: 0.7;}.effectiveAppsSocialMediaIconsBar a:not(:last-child) { margin-bottom:${this._settings['bar_icons_padding']}px;} .effectiveAppsSocialMediaIconsBar .ea-smib-controller-close-btn:hover { background-color: unset !important; } .smib-bar-animation-1 { animation: smib-dancing-animation 2000ms alternate linear infinite } .smib-bar-animation-1:hover { animation: none; } @keyframes smib-dancing-animation{ from{ transform:scale3d(1,1,1) } 10%,20%{ transform:scale3d(.9,.9,.9) rotate3d(0,0,1,-3deg) } 30%,50%,70%,90%{ transform:scale3d(1.1,1.1,1.1) rotate3d(0,0,1,3deg) } 40%,60%,80%{ transform:scale3d(1.1,1.1,1.1) rotate3d(0,0,1,-3deg) } to{ transform:scale3d(1,1,1) } }`);
            let socialMediaIconsHtml = "";
            for (let socialMedia of this._socialMedias['social_medias']) {
                let socialMediaUrl = socialMedia.social_media_url;
                let linkTarget = '_blank';
                const socialMediaType = socialMedia['social_media_type'].toLowerCase();
                let socialMediaBackgroundColor = socialMedia['background_color'];
                if (socialMediaBackgroundColor === "#d6249f" && socialMediaType === "instagram") {
                    socialMediaBackgroundColor = "#d6249f;background:radial-gradient(circle at 30% 107%,#fdf497 0,#fdf497 5%,#fd5949 45%,#d6249f 60%,#285aeb 95%)";
                }

                let aStyle = `background-color: ${socialMediaBackgroundColor};`;
                if (this._settings['bar_shape'] === 2) {
                    aStyle += "border-radius: 50%;";
                }
                if (currentState === 'closed') {
                    aStyle += this._settings['bar_l_r_position'] === 'left' ? 'transform: translateX(-100%)' : 'transform: translateX(100%)';
                }

                if (socialMediaType === 'email') {
                    socialMediaUrl = `mailto:${socialMediaUrl}`;
                    linkTarget = "_self";
                }
                else if (socialMediaType === 'phone') {
                    socialMediaUrl = `tel:${socialMediaUrl}`;
                    linkTarget = "_self";
                }
                else if (socialMediaType === 'link') {
                    socialMediaUrl = 'javascript:navigator.clipboard.writeText(window.location.href);';
                    linkTarget = "_self";
                }

                socialMediaIconsHtml += `<a aria-label="${socialMediaType}" style="${aStyle}" onclick="window.socialBar.reportSocialMediaClick('${socialMediaType}');" href="${socialMediaUrl}" target="${linkTarget}"><img alt="${socialMediaType}" src="https://app.getsocialbar.com/social_media_icon/${socialMediaType}.svg?color=${this._settings['bar_minimization_color']}" width="${this._settings['icon_size']}px" height="${this._settings['icon_size']}px" /></a>`;
            }

            if (this._settings['bar_minimization'] === 2) {
                const arrowOpenDirection = this._settings['bar_l_r_position'];
                const arrowClosedDirection = arrowOpenDirection === 'left' ? 'right' : 'left';
                const arrowSvgSrc = currentState === 'closed' ? arrowClosedDirection : arrowOpenDirection;
                if (this._settings['bar_t_b_position'] === 'top') {
                    socialMediaIconsHtml += `<a style="background-color: transparent; cursor: unset;" style="border-radius: 50%;"><img id="ea-smib-toggle-arrow" onclick="window.socialBar.toggle();" style="cursor: pointer;" alt="toggle arrow" src="https://app.getsocialbar.com/static/${arrowSvgSrc}_arrow.svg?color=${this._settings['bar_minimization_color']}" width="${this._settings['icon_size']}px" height="${this._settings['icon_size']}px" /></a>`;
                }
                else {
                    socialMediaIconsHtml = `<a style="background-color: transparent; cursor: unset;" style="border-radius: 50%;"><img id="ea-smib-toggle-arrow" onclick="window.socialBar.toggle();" style="cursor: pointer;" alt="toggle arrow" src="https://app.getsocialbar.com/static/${arrowSvgSrc}_arrow.svg?color=${this._settings['bar_minimization_color']}" width="${this._settings['icon_size']}px" height="${this._settings['icon_size']}px" /></a>` + socialMediaIconsHtml;
                }

                SmibUtils.appendHTMLToBody(`<div id="ea-smib-container" aria-hidden="true" class="effectiveAppsSocialMediaIconsBar">${socialMediaIconsHtml}</div>`);
            }
            else {
                SmibUtils.appendHTMLToBody(`<div id="ea-smib-container" aria-hidden="true" class="effectiveAppsSocialMediaIconsBar">${socialMediaIconsHtml}</div>`);
            }

            if (this._settings['bar_animation'] === 1) {
                SmibUtils.startSocialBarAnimation1();
            }
        }
    }

    function smibMain() {
        console.log('%c------ Social Bar: Social Media Icons by Effective Apps is Initializing ------', 'color: cyan');
        console.log('%c------ Contact us at support@effectify.co for help and questions about the app ------', 'color: cyan');
        if (window.SMIB_SCRIPT_INJECTED === undefined) {
            window.SMIB_SCRIPT_INJECTED = true;
            window.socialBar = new SocialBar({"bar_minimization": 1, "bar_minimization_color": "FFFFFF", "bar_shape": 2, "bar_location": 1, "bar_position": 4, "bar_animation": 0, "bar_size": 53, "icon_size": 48, "bar_icons_padding": 0, "bar_v_padding": 3, "bar_h_padding": 3, "social_medias": "{\"social_medias\": [{\"background_color\": \"#808080\", \"social_media_type\": \"whatsapp\", \"social_media_url\": \"https://wa.me/+971547211140\", \"social_media_clicks\": 522}]}", "mobile_behaviour": 1, "bar_l_r_position": "right", "bar_t_b_position": "bottom"});
            window.socialBar.runLogic();
        }
    }

    smibMain();
}());