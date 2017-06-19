import EmailModal from '../Modals/EmailModal/index.vue'
import Modal from '../Modals/Modal/index.vue'

import 'vue-awesome/icons/envelope'
import 'vue-awesome/icons/github'

import Icon from 'vue-awesome/components/Icon.vue'

export default {
  name: 'Logos',
  components: {
    Icon,
    'emailmodal': EmailModal,
    'modal': Modal
  },
  data: {
    showEmailModal: true
  }
}
