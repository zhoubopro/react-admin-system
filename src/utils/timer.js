export default {
  /**
   * @description 定时器
   * @param end 截止时间
   * @param update 截止时间回掉
   * @param handle
   */
  countDown(end, update, handle) {
    // 获取当前时间
    const now = new Date().getTime();
    const lastTime = end - now;
    const _this = this;
    if (lastTime > 0) {
      handle.call(_this);
    } else {
      // 一秒
      const second = 1000;
      // 一分钟
      const minute = 1000 * 60;
      // 一小时
      const hour = 1000 * 60 * 60;
      // 一天
      const day = 1000 * 60 * 60 * 24;
      let lastDay = Math.floor(lastTime / day);
      let lastHour = Math.floor((lastTime - day * lastDay) / hour);
      let lastMinute = Math.floor((lastTime - day * lastDay - lastHour * hour) / minute);
      let lastSecond = Math.floor((lastTime - day * lastDay - lastHour * hour - lastMinute * minute) / second);
      let resetTimer = [];
      if (lastDay > 0) {
        resetTimer.push(`<em>${lastDay}</em>天`);
      }
      if (resetTimer.length || (lastHour > 0)) {
        resetTimer.push(`<em>${lastHour}</em>时`);
      }
      if (resetTimer.length || lastMinute > 0) {
        resetTimer.push(`<em>${lastMinute}</em>分`);
      }
      if (resetTimer.length || lastSecond > 0) {
        resetTimer.push(`<em>${lastSecond}</em>秒`);
      }
      _this.lastTime = resetTimer.join('');
      update.call(_this, resetTimer.join(''));
      setTimeout(function () {
        _this.countDown(end, update, handle);
      }, 10 * 3);
    }
  }
}
