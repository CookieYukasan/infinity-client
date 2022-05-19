<template>
  <div class="pt-24 prl-32">
    <div class="row gx-0">
      <div class="col-4 br-6 border-grey-300 p-16">
        <div>
          <p class="font-16 font-semibold font-grey-200">Show balance</p>
          <span v-if="showBalance" class="font-bold font-20 mt-4"
            >R$ {{ formatCurrency(3123.23) }}</span
          >
          <div
            v-if="!showBalance"
            class="bg-grey-300 hided-balance br-6 mt-4"
          ></div>
        </div>
        <div>
          <p class="font-16 font-semibold font-grey-200 mt-16">
            Pending balance
          </p>
          <span v-if="showBalance" class="font-bold font-14 mt-4"
            >R$ {{ formatCurrency(73.19) }}</span
          >
          <div
            v-if="!showBalance"
            class="bg-grey-300 hided-balance br-6 mt-4"
          ></div>
        </div>
        <Button
          btnClass="btn-infinity-primary br-6 ptb-8 font-bold font-14 w-100 mtb-16"
          >Withdraw</Button
        >
        <hr class="infinity-divider w-100" />
        <div
          class="d-flex align-items-center justify-content-center cursor-pointer"
          @click="handleHideBalance"
        >
          <span class="material-icons-outlined font-24">{{
            showBalance ? 'visibility_off' : 'visibility'
          }}</span>
          <p class="font-16 font-bold font-black-200 ml-8">
            {{ showBalance ? 'Hide' : 'Show' }} balance
          </p>
        </div>
      </div>
      <div class="col ml-32 br-6 border-grey-300 p-16">
        <div class="d-flex align-items-center">
          <span class="material-icons-outlined font-32 font-red">campaign</span>
          <p class="font-bold font-20 font-black-200 ml-16">
            Important warning
          </p>
        </div>
        <p class="font-16 font-black-200 mt-16">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
      </div>
    </div>
    <div v-if="hasNewMessages" class="mt-24">
      <h1 class="font-black-200 font-bold font-20">Notification</h1>
      <div class="d-flex align-items-center mt-16">
        <span class="material-icons-outlined font-primary font-48 mr-8"
          >mark_email_unread</span
        >
        <div>
          <span class="font-bold font-16 font-primary">37 new</span>
          <span class="font-bold font-16 font-black-200"
            >messages received</span
          >
        </div>
      </div>
    </div>
    <div class="mt-24">
      <div class="d-flex align-items-center justify-content-between">
        <h1 class="font-20 font-black-200 font-bold">Services in progress</h1>
        <NuxtLink
          class="font-primary font-bold font-16"
          to="/services-in-progress"
        >
          See all
        </NuxtLink>
      </div>
      <div class="mtb-16 d-flex align-items-center">
        <div
          v-for="(service, index) in servicesPriorityArr"
          :key="service.hexColor"
          class="d-flex align-items-center"
          :class="index !== 0 ? 'ml-16' : ''"
        >
          <div
            class="service-priority-color br-6"
            :style="{
              backgroundColor: service.hexColor,
            }"
          ></div>
          <p class="font-16 ml-8 font-black-200" v-text="service.label"></p>
        </div>
      </div>
      <table class="table table-borderless infinity-table">
        <thead>
          <tr>
            <th>Priority</th>
            <th>Customer</th>
            <th>Estimated time</th>
            <th>Desired classification</th>
            <th>Amount receivable</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="service in servicesInProgress" :key="service._id">
            <td>
              <div
                class="service-priority-color br-6"
                :class="{
                  'high-priority': service.priority === 'high',
                  'medium-priority': service.priority === 'medium',
                  'low-priority': service.priority === 'low',
                }"
              ></div>
            </td>
            <td>
              <p class="font-14 font-semibold font-black-200">
                {{ service.customer && service.customer.userName }}
              </p>
            </td>
            <td class="d-flex align-items-center">
              <span class="material-icons-outlined font-red font-16"
                >timer</span
              >
              <p class="ml-8 font-semibold font-black-200 font-16">
                {{ service.estimatedTime }}
              </p>
            </td>
            <td class="font-semibold font-black-200 font-16">
              {{ service.desiredClassification }}
            </td>
            <td class="d-flex align-items-center">
              <span class="material-icons-outlined font-green font-16"
                >savings</span
              >
              <p class="ml-8 font-semibold font-black-200 font-16">
                R$ {{ formatCurrency(service.amountReceivable) }}
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hasNewMessages: true,
      showBalance: false,
      servicesInProgress: [
        {
          _id: 1,
          customer: {
            _id: 1,
            userName: 'cuqinho',
            avatar:
              'https://preview.redd.it/nls87rjmn7o31.jpg?auto=webp&s=4d39654070a17aabf03920fd47b3c051f0cc04a7',
          },
          estimatedTime: '03 days',
          desiredClassification: 'Bronze 3 to Diamond 1',
          amountReceivable: 588.9,
          priority: 'high',
        },
        {
          _id: 2,
          customer: {
            _id: 2,
            userName: 'cookie',
            avatar:
              'https://preview.redd.it/nls87rjmn7o31.jpg?auto=webp&s=4d39654070a17aabf03920fd47b3c051f0cc04a7',
          },
          estimatedTime: '02 days',
          desiredClassification: 'Bronze 3 to Diamond 1',
          amountReceivable: 188.9,
          priority: 'low',
        },
        {
          _id: 3,
          customer: {
            _id: 3,
            userName: 'cwrsed',
            avatar:
              'https://preview.redd.it/nls87rjmn7o31.jpg?auto=webp&s=4d39654070a17aabf03920fd47b3c051f0cc04a7',
          },
          estimatedTime: '03 days',
          desiredClassification: 'Bronze 3 to Diamond 1',
          amountReceivable: 2316,
          priority: 'medium',
        },
        {
          _id: 4,
          customer: {
            _id: 4,
            userName: 'marijane',
            avatar:
              'https://preview.redd.it/nls87rjmn7o31.jpg?auto=webp&s=4d39654070a17aabf03920fd47b3c051f0cc04a7',
          },
          estimatedTime: '04 days',
          desiredClassification: 'Bronze 3 to Diamond 1',
          amountReceivable: 68.12,
          priority: 'medium',
        },
      ],
      servicesPriorityArr: [
        {
          label: 'High priority',
          hexColor: '#FF3B3B',
        },
        {
          label: 'Medium priority',
          hexColor: '#FAB035',
        },
        {
          label: 'Low priority',
          hexColor: '#377DFF',
        },
      ],
    }
  },
  methods: {
    handleHideBalance() {
      this.showBalance = !this.showBalance
    },
  },
  computed: {
    loggedUser() {
      return this.$store.state.auth.user
    },
  },
  middleware: ['authenticateBooster'],
  layout: 'dashboard/booster',
}
</script>

<style scoped>
.hided-balance {
  height: 20.5px;
}

.service-priority-color {
  width: 26px;
  height: 26px;
}

.low-priority {
  background-color: var(--blue);
}

.high-priority {
  background-color: var(--red);
}

.medium-priority {
  background-color: var(--yellow);
}

/* TABLE CSS */

.infinity-table tr th {
  border: 1px solid var(--grey-300);
}

.infinity-table tr th:nth-child(1) {
  border-bottom-left-radius: 16px;
  border-top-left-radius: 16px;
}
</style>
