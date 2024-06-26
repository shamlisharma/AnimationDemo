package com.animateddemo

import com.wix.detox.Detox
import com.wix.detox.config.DetoxConfig
import org.junit.Rule
import org.junit.Test
import org.junit.runner.RunWith
import androidx.test.ext.junit.runners.AndroidJUnit4
import androidx.test.filters.LargeTest
import androidx.test.rule.ActivityTestRule

@RunWith(AndroidJUnit4::class)
@LargeTest
class DetoxTest {
    @Rule
    val mActivityRule = ActivityTestRule(MainActivity::class.java, false, false)

    @Test
    fun runDetoxTests() {
        val detoxConfig = DetoxConfig()
        detoxConfig.idlePolicyConfig.masterTimeoutSec = 90
        detoxConfig.idlePolicyConfig.idleResourceTimeoutSec = 60
        detoxConfig.rnContextLoadTimeoutSec = if (BuildConfig.DEBUG) 180 else 60

        Detox.runTests(mActivityRule, detoxConfig)
    }
}

