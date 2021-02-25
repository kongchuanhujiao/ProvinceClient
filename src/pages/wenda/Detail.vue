<template>
  <q-page class="q-px-md">
    <div class="q-my-sm">
      <span class="text-h5">题目</span>
      <span class="text-subtitle1 q-mx-xs">[{{ type[data.questions[0].type] }}]</span>
      <q-badge outline color="grey-13" :label="data.group_name"/>
    </div>

    <div class="text-body1">
      <div class="q-my-xs">
        问题：
        <span v-for="( item, i ) in data.questions[0].question" :key="i">
              <span v-if="item.type === 'text'">{{ item.data }}</span>
              <img v-else class="question-img" alt="问题图片"
                   :src="'/assets/pictures/questions/'+$q.cookies.get('account') + item.data">
        </span>
      </div>
      <div class="q-my-xs">
        选项：
        <q-badge outline class="q-ma-xs" color="light-blue-12"
                 v-for="( option, i ) in data.questions[0].options"
                 :key="i"
                 :label="abc[i] + '. ' + option"
        />
      </div>
      <div class="q-my-xs">答案：{{ data.questions[0].key }}</div>
    </div>

    <div class="q-my-md">
      <span class="text-h6">状态</span>
      <q-badge outline class="q-mx-sm" :satus1="(data.questions[0].status)"
               :label="badgeLabel(data.questions[0].status)"
               :color="badgeColor(data.questions[0].status)"
      />
      <q-badge outline :label="'已作答人数：' + data.calculations.count" color="blue"/>
    </div>
    <q-btn-toggle unelevated class="q-mb-md" color="grey-2" text-color="grey-9" toggle-color="light-blue-12"
                  v-model="status"
                  @input="switchStatus"
                  :options="toggle"
    />

    <q-separator class="q-mb-md"/>

    <div>
      <span class="text-h6">正确</span>
      <div class="flex justify-around">
        <q-circular-progress show-value class="text-positive" size="100px" color="positive" :thickness="0.1"
                             :value="rightRate()"
        >
          {{ rightRate() }}%
        </q-circular-progress>

        <div id="data-right"/>
      </div>

      <q-expansion-item switch-toggle-side class="q-mt-md">
        <template slot="header">
          <q-item-section>回答正确的学生</q-item-section>
          <q-item-section side>
            <q-btn size="sm" icon="thumb_up_off_alt" @click="praise">表扬他们</q-btn>
          </q-item-section>
        </template>

        <q-separator/>

        <q-list separator>
          <q-item class="items-center" v-for="( stu, i ) in data.calculations.right" :key="i">
            {{ data.members[stu] }}
          </q-item>
        </q-list>
      </q-expansion-item>
    </div>

    <div class="q-my-md">
      <span class="text-h6">错误</span>
      <div class="flex justify-around">
        <q-circular-progress show-value class="text-red" size="100px" color="red" :thickness="0.1"
                             :value="wrongRate()"
        >
          {{ wrongRate() }}%
        </q-circular-progress>

        <div id="data-wrong"/>
      </div>

      <q-expansion-item switch-toggle-side class="q-mt-md" label="回答错误的学生">
        <q-separator/>
        <q-expansion-item switch-toggle-side
                          v-for="( sdqdq, i ) in data.calculations.wrong"
                          :key="i"
                          :label="'错误类型：'+sdqdq.type"
        >
          <q-separator/>
          <q-list separator>
            <q-item class="items-center" v-for="( stu, ii ) in sdqdq.member" :key="ii">
              {{ data.members[stu] }}
            </q-item>
          </q-list>
        </q-expansion-item>
      </q-expansion-item>
    </div>

    <span class="text-h6">易错选项：{{ proneWrong }}</span>
    <div id="data-pronewrong"/>

  </q-page>
</template>

<script src="src/pages/wenda/Detail.js"/>

<style scoped>

</style>
