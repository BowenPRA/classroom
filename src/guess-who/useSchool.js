// src/guess-who/useSchool.js
// The signed-in state and the student list, for whichever end needs them. Kept
// out of the component files so React Fast Refresh keeps working (a file that
// exports both components and a hook trips the only-export-components rule).
import { useEffect, useState } from 'react'
import { supabase, loadStudents } from './school.js'

/**
 * `{ session, students, error }`. `session` is undefined while it is still
 * being read, then a session or null. `students` is null until loaded. Pass
 * `want = false` to skip loading (the monster board needs no one).
 */
export function useSchool(want = true) {
  const [session, setSession] = useState(undefined)
  const [loaded, setLoaded] = useState({ for: null, students: null, error: '' })

  useEffect(() => {
    let alive = true
    supabase.auth.getSession().then(({ data }) => { if (alive) setSession(data.session || null) })
    const { data } = supabase.auth.onAuthStateChange((_event, next) => { if (alive) setSession(next || null) })
    return () => { alive = false; data.subscription.unsubscribe() }
  }, [])

  const userId = session?.user?.id || null
  useEffect(() => {
    if (!want || !userId) return
    let alive = true
    loadStudents()
      .then((students) => { if (alive) setLoaded({ for: userId, students, error: '' }) })
      .catch((err) => { if (alive) setLoaded({ for: userId, students: null, error: err.message || 'The students could not be loaded.' }) })
    return () => { alive = false }
  }, [want, userId])

  // A list loaded for someone who has since signed out is not shown.
  const mine = loaded.for === userId && userId
  return { session, students: mine ? loaded.students : null, error: mine ? loaded.error : '' }
}
