import { defineComponent } from './vendor/vue.esm-browser.js';
import UiContainer from './UiContainer.js';
import UiAlert from './UiAlert.js';
import { fetchMeetupById } from './meetupService.js';
import MeetupView from '../06-MeetupView/MeetupView.js';
import meetups from './api/meetups.js';

export default defineComponent({
  name: 'PageMeetup',

  components: {
    UiAlert,
    UiContainer,
    MeetupView,
  },

  props: {
    meetupId: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      meetup: null,
      isLoaded: false,
      error: '',
    };
  },

  watch: {
    meetupId: {
      immediate: true,

      handler(newMeetupId) {
        this.UpdateMeetup(newMeetupId);
      },
    },
  },

  methods: {
    UpdateMeetup(meetupId) {
      this.isLoaded = true;
      this.error = '';

      fetchMeetupById(meetupId)
        .then((result) => {
          this.meetup = result;
        })
        .catch((error) => {
          this.isLoaded = false;
          this.error = error.message;
        })
        .finally(() => {
          this.isLoaded = false;
        });
    },
  },

  template: `
    <div class="page-meetup">
      <meetup-view v-if="!isLoaded && error == ''" :meetup="meetup"/>

      <ui-container v-else-if="isLoaded">
        <ui-alert>Загрузка...</ui-alert>
      </ui-container>

      <ui-container v-else>
        <ui-alert>{{ error }}</ui-alert>
      </ui-container>
    </div>`,
});
