<template>
  <modal :show.sync="show" :on-close="close">
        <div class="modal-header">
            <h3>New Post</h3>
        </div>

        <div class="modal-body">
            <label class="form-label">
                Title
                <input v-model="title" class="form-control">
            </label>
            <label class="form-label">
                Body
                <textarea v-model="body" rows="5" class="form-control"></textarea>
            </label>
        </div>

        <div class="modal-footer text-right">
            <button class="modal-default-button" @click="savePost()">
                Save
            </button>
        </div>
    </modal>
</template>

<script>
import Modal from '../Modal/index.vue'

export default {
  name: 'EmailModal',
  components: {
    'modal': Modal
  },
  props: ['show'],
  data: function () {
  	return {
    	title: '',
      body: ''
    };
  },
  methods: {
    close: function () {
      this.show = false;
      this.title = '';
      this.body = '';
    },
    savePost: function () {
      // Insert AJAX call here...
      this.close();
    }
  }
}
</script>

<style scoped lang="scss">
.modal-header h3 {
    margin-top: 0;
    color: #42b983;
}

.modal-body {
    margin: 20px 0;
}

.text-right {
    text-align: right;
}

.form-label {
    display: block;
    margin-bottom: 1em;
}

.form-label > .form-control {
    margin-top: 0.5em;
}

.form-control {
    display: block;
    width: 100%;
    padding: 0.5em 1em;
    line-height: 1.5;
    border: 1px solid #ddd;
}

.modal-enter, .modal-leave {
    opacity: 0;
}

.modal-enter .modal-container,
.modal-leave .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}

</style>
