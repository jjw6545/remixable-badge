import { LitElement, html, css } from "lit";
import "./remixable-badge.js";

export class Badges extends LitElement{

    static get tag() {
        return 'project-list';
    }

    static get properties() {
        return {
            badges: { type: Array },
        }
    }

    static get styles() {
        return css`
        

        .wrapper {
            width: 400px;
        }
        .item {
            display: inline-flex
        }
        
        `;
    }
    constructor() {
        super();
        this.badges = [];
        this.updateRoster();
    }

  
    updateRoster() {
        const address = new URL('../assets/badge-roster.json', import.meta.url).href;
        fetch(address).then((response) => {
            if (response.ok) {
                return response.json()
            }
            return [];
        })
        .then((data) => {
            this.badges = data;
        });
    }

    render() {
        return html`
        <div class="wrapper">
            ${this.badges.map(badge => html`
            <div class="item">
                <remixable-badge title="${badge.title}", name="${badge.name}", position="${badge.position}", organization="${badge.organization}", image="${badge.image}", tvcolor="${badge.tvcolor}", backgroundcolor="${badge.backgroundcolor}", textcolor="${badge.textcolor}", knobcolor="${badge.knobcolor}", logo="${badge.logo}", filter="${badge.filter}", filternum="${badge.filternum}"></remixable-badge>
            </div>
            `)}
        </div>
        `;
    }
}
customElements.define(Badges.tag, Badges);
