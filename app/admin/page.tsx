export default function AdminPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-5xl font-bold text-slate-900">
        Admin Dashboard
      </h1>

      <p className="mt-3 text-slate-600">
        Manage and add new government documents.
      </p>

      <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-8 shadow-md">
        <form className="grid gap-6">

          <div>
            <label className="mb-2 block font-semibold">
              Document Title
            </label>

            <input
              type="text"
              placeholder="Aadhaar Card"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold">
              Slug
            </label>

            <input
              type="text"
              placeholder="aadhaar"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold">
              Category
            </label>

            <select className="w-full rounded-lg border border-slate-300 px-4 py-3">
              <option>Identity</option>
              <option>Finance</option>
              <option>Travel</option>
              <option>Transport</option>
              <option>Education</option>
              <option>Certificates</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block font-semibold">
              Description
            </label>

            <textarea
              rows={4}
              className="w-full rounded-lg border border-slate-300 px-4 py-3"
            />
          </div>

          <button
            type="submit"
            className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Save Document
          </button>

        </form>
      </div>
    </main>
  );
}