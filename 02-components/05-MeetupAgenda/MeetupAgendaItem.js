import { defineComponent } from './vendor/vue.esm-browser.js';
import { agendaItemIcons, agendaItemDefaultTitles } from './meetupService.js';

export default defineComponent({
  name: 'MeetupAgendaItem',

  props: {
    agendaItem: {
      required: true,
    },
  },

  computed: {
    title() {
      let title = this.agendaItem.title;
      let defaultTitle = agendaItemDefaultTitles[title ? title : 'registration'];

      return defaultTitle ? defaultTitle : title;
    },

    iconPath() {
      return '/assets/icons/icon-' + agendaItemIcons[this.agendaItem.type] + '.svg';
    },
  },

  template: `
    <div class="agenda-item">
      <div class="agenda-item__col">
        <img 
          :src="iconPath" class="icon" :alt="title" />
      </div>
      <div class="agenda-item__col">{{agendaItem.startsAt}} - {{agendaItem.endsAt}}</div>
      <div class="agenda-item__col">
        <h3 class="agenda-item__title">{{title}}</h3>
        <p class="agenda-item__talk" v-if="agendaItem.type === 'talk'">
          <span>{{agendaItem.speaker}}</span>
          <span class="agenda-item__dot"></span>
          <span class="agenda-item__lang">{{agendaItem.language}}</span>
        </p>
        <p v-if="agendaItem.type === 'talk'">{{agendaItem.description}}</p>
      </div>
    </div>`,
});
